import china from '../../public/geoJsonColl/china.json'
import neimenggu from '../../public/geoJsonColl/province/150000-内蒙古.json'
import chifeng from '../../public/geoJsonColl/city/150000-内蒙古-150400-赤峰市.json'
import mockChina from '../../public/mock/china.json'
import mockProvice from '../../public/mock/province.json'
import mockCity from '../../public/mock/city.json'
// 获取GeoJSON数据
export const getGeoJson = (type, name) => {
    if (type === 'country') return china
    if (type === 'province') return neimenggu
    // 判断是区，县，获取相应数据
    return chifeng
}

export const getChinaData = async () => {
    //   return axios.get('/mock/china.json')
    // return mockChina
    const url = "https://api.pharbers.com/phchproxyquery"
    const accessToken = "d29280544832665b7aebebf71e55656a7087546f3cf6d2b90a76d91b0c48a9db"
    let body = {"query":"select `标准省份名称` as provice, sum(sales) as sales from max_result.data_wide where date='202001' and provice !='null' group by provice","schema":["provice","sales"]}
    let options = {
        method: "POST",
        headers: {
            "Authorization": accessToken,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            "accept": "application/json"
        },
        body: JSON.stringify(body)
    }
    let result =  await fetch(url, options).then(res => res.json())
    let partData = []
    result.forEach((item) => {
        partData.push({
            name: item.provice,
            value: item.sales
        })
    })
    return partData
}

export const getProvinceData = () => {
    // 判断是省，自治区，直辖市，获取相应数据
    //   return axios.get('/mock/province.json')
    return mockProvice
}

export const getCityData = () => {
    // 判断是市，直辖市，获取相应数据
    //   return axios.get('/mock/city.json')
    return mockCity	
}
