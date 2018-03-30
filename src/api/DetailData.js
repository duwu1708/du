import myajax from '@/tool/myajax';

export default {

    getDetailData(goodsID,cb){
        const config = {
            url: 'http://10.8.162.5:3000/api/goods?id='+goodsID,
            options:{},
            success: (data) => {

                cb(data)
            }
        }
        myajax.getfetch(config);
    }
}