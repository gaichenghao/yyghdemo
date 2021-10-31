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
    //根据医院编号查询医院详情
    show(hoscode) {
        return request({
            url: `${api_name}/findHospDetail/${hoscode}`,
            method: 'get'
        })
    },
    //根据医院编号 查询科室信息
    findDepartment(hoscode) {
        return request({
            url: `${api_name}/department/${hoscode}`,
            method: 'get'
        })
    }

}