import { k } from '../locale'

export default {
    methods: {
        k(...args){
            return k.apply(this,args)
        }
    },
}