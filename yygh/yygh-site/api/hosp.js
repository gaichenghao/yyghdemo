import request from '@/utils/request'

const api_name=`/admin/hosp/hospital`

export default{
    //查询医院列表
    getPageList(page,limit,searchObj){
        return request({
            url: `${api_name}/findHospList/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },
    //根据名称模糊查询
    getByHosname(hosname){
        return request({
            url: `${api_name}/findByHosName/${hosname}`,
            method: 'get'
        })
    },
}