import myajax from '@/tool/myajax';

export default {

    getNavList(cb){
        const config = {
            url: 'http://localhost:3000/api/goods',
            options:[

            ],
            success: (response) => {
                cb(response)
            }
        }
        myajax.getfetchJsonp(config);
    }
}