import request from '@/utils/request'

const api_name=`/admin/cmn/dict`

export default{
    //据dictCode获取下级节点
    findByDictCode(dictCode){
        return request({
            url: `${api_name}/findDictCode/${dictCode}`,
            method: 'get'
        })
    },
    //根据主节点查询子节点
    findByParentId(parentId){
        return request({
            url: `${api_name}/findChildData/${parentId}`,
            method: 'get'
        })
    },
}