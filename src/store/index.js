import { createStore } from 'vuex'
import doc from "./module/doc"
const store = new createStore({
    modules: {
        doc
    },
});

export default store