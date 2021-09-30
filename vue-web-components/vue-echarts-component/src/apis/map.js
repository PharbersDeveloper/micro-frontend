import china from '../../public/geoJsonColl/china.json'
import neimenggu from '../../public/geoJsonColl/province/150000-内蒙古.json'
import jilin from '../../public/geoJsonColl/province/220000-吉林.json'
import chifeng from '../../public/geoJsonColl/city/150000-内蒙古-150400-赤峰市.json'
import mockChina from '../../public/mock/china.json'
import mockProvice from '../../public/mock/province.json'
import mockCity from '../../public/mock/city.json'
// 获取GeoJSON数据
export const getGeoJson = (type, name) => {
    if (type === 'country') return china
    if (type === 'province') return jilin
    // 判断是区，县，获取相应数据
    return chifeng
}

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

export const getProvinceData = async () => {
    // fetch('https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/110000-%E5%8C%97%E4%BA%AC.json').then(res => res.json()).then(ress => {
    //     console.log(ress)
    // })
    let params = {"query":"select `标准城市名称` as city, sum(sales) as sales from max_result.data_wide where date='202001' and `标准省份名称`='吉林省' group by city","schema":["city","sales"]}
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

export const getCityData = () => {
    // 判断是市，直辖市，获取相应数据
    //   return axios.get('/mock/city.json')
    return mockCity	
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
    const accessToken = getCookie("access_token") || "540e1bc75c2d64036afc492434f53e06e6641edb9390e76b9ae5e1d0faf6a8d1"
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