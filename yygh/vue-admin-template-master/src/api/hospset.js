import request from '@/utils/request'

export default {

    getHospSetList(current,limit,searchObj){

        return request({
            url:`/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
            method:'post',
            data:searchObj//使用json
        })
    },
    deleteHospSet(id){

        return request({
            url:`/admin/hosp/hospitalSet/${id}`,
            method:'delete'
        })
    },
    //批量删除
    batchRemoveHospSet(idList){
        return request({
            url:`/admin/hosp/hospitalSet/batchRemove`,
            method:'delete',
            data:idList
        })
    }


}
