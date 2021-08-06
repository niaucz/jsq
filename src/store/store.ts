// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseStore } from 'vuex'

export interface State {
    number: string
    numberLogic: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    // 严格检查更改状态提交 生产关闭
    strict: true,
    state() {
        return {
            number: '',
            numberLogic: ''
        }
    },
    mutations: {
        //末尾追加
        addMath(state: State, str: string) {
            if (state.number.length < 10) {
                state.number += str
            }
            console.log(state)
        },
        //逻辑运算符
        logic(state: State, str: string) {
            state.numberLogic += state.number += str
            state.number = ''
        },
        //末尾删除
        delMath(state) {
            if (state.number.length > 0) {
                state.number = state.number.substring(0, state.number.length - 1)
            }
        },
        //清空数字面板
        clearMath(state: State) {
            state.number = ''
            state.numberLogic = ''
        }
    },
    actions: {

    },
    getters: {

    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore(): Store<State> {
    return baseStore(key)
}