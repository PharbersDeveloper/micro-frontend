// 获取地图
export const getGeoJson = async (type, name) => {
    let result
    if (type === 'country') {
        result = await fetch('https://ph-platform.s3.cn-northwest-1.amazonaws.com.cn/2020-11-11/etl/blueprints/map/china.json').then(res => res.json())
    }
    if (type === 'province') {
        result = fetch('https://ph-platform.s3.cn-northwest-1.amazonaws.com.cn/2020-11-11/etl/blueprints/map/province/' + encodeURIComponent(`${name}.json`)).then(res => res.json())
    }
    return result
}
//全国数据
export const getChinaData = async () => {
    let params = {"query":"select `标准省份名称` as provice, sum(sales) as sales from max_result.data_wide where date='202001' and provice !='null' group by provice","schema":["provice","sales"]}
    let result = await queryData(params)
    let partData = []
    result.forEach((item) => {
        partData.push({
            name: item.provice,
            value: item.sales
        })
    })
    return partData
}
//省份数据
export const getProvinceData = async (name) => {
    let provinceName = name.split('-')[1]
    let params = {"query":"select `标准城市名称` as city, sum(sales) as sales from max_result.data_wide where date='202001' and `标准省份名称`= '" + provinceName + "' group by city","schema":["city","sales"]}
    let result = await queryData(params)
    let partData = []
    result.forEach((item) => {
        partData.push({
            name: item.city,
            value: item.sales
        })
    })
    return partData
}
//城市数据
export const getCityData = () => {
    // 判断是市，直辖市，获取相应数据
    return []	
}

function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}

async function queryData(data) {
    const url = "https://api.pharbers.com/phchproxyquery"
    const accessToken = getCookie("access_token") || "d5c8e917402c60e2d44e235ee52427b1feda4e9351f3a591b2aa910f9efbe939"
    let body = data
    let options = {
        method: "POST",
        headers: {
            "Authorization": accessToken,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            "accept": "application/json"
        },
        body: JSON.stringify(body)
    }
    let result = await fetch(url, options).then(res => res.json())
    return result
}