import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/http'
//import { reject } from 'core-js/fn/promise'

//import { http } from './services/http-common'
//import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const state = {
    token: null,
    status: null,
    visitas: [],
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token }) {
        state.token = token;
    },

    DESLOGAR_USUARIO(state) {
        state.token = null;
    },
    CONFIRMAR_SAIDA_VISITANTE(){
        
    },
    SET_VISITANTE(state, visita){
        state.visitas = visita;
    },
    ADICIONAR_VISITA(state, visita){
        let visitas = state.visitas.concat(visita)
        state. visitas = visitas;
    }
}

const actions = {
    efetuarLogin({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('/autenticacao', usuario, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response.data);

                commit('DEFINIR_USUARIO_LOGADO', {
                    token: response.data.token
                })
                resolve(response.data)
            }).catch(erro => {

                console.log(erro);
                reject(erro);
            });
        });
    },
    efetuarLogout({ commit }, 
        //usuario
        ) {
        return new Promise((resolve) => {
            commit('DESLOGAR_USUARIO')
            //localStorage.removeItem(usuario)
            resolve()
        
        })
    },
    criarVisita({commit}, visita){
        this.$http.post("/visitas", visita);
        commit('ADICIONAR_VISITA', visita)
    }
}
    

const getters = {
    isLogado: state => Boolean(state.token),
    authStatus: state=> state.status,
}

export default new Vuex.Store({
    state,
    mutations,
    actions: actions,
    modules: {
    },
    getters
})