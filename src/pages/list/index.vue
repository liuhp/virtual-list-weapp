<template>
<div>
  <virtual-block
    :allDataList="dataList"
    :scrollHeight="scrollHeight"
    :blockHeight="blockHeight"
    :onRequesting="onRequesting"
    :msg="msg"
    :refresherTriggered="refresherTriggered"
    @bottom="onBottom"
    @onRefresh="onRefresh"
  >
  <template v-slot:item-content="item">
    <div style="height: 80px;line-height: 80px;text-align: center;border-bottom: 1px solid #000">{{item.thisItem}}</div>
  </template>
  </virtual-block>
</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue"
import Taro from "@tarojs/taro"

export default defineComponent({
  setup() {
    interface stateInterface {
      dataList: string[],
      isComplete:boolean,
      scrollHeight: number,
      blockHeight: number,
      onRequesting: boolean,
      msg: string,
      refresherTriggered: boolean

    }
    const  state = reactive<stateInterface>({
      dataList:[],
      isComplete: false,
      scrollHeight: 600,
      blockHeight: 80,
      onRequesting: false,
      msg: '玩命加载中...',
      refresherTriggered: false

    })
    onMounted(async() => {
      await getList()
      state.scrollHeight = Taro.getSystemInfoSync().windowHeight
    })
    const getList = () => {
      state.onRequesting = true
      state.msg = '玩命加载中...'
       setTimeout(() => {
          const curLen = state.dataList.length;
          for (let i = curLen; i < curLen + 10; i++) {
            state.dataList.push(`${i}`);

          }
          state.onRequesting = false
          
          if (state.dataList.length > 30) {
            state.isComplete = true
            state.onRequesting = true
            state.msg = '我是底部哦~'
            console.log('我是底部哦~')
          }
        }, 500);
    }
    const onBottom = () => {
      console.log('bottom')
      loadMore()
    }

    const loadMore = async () => {
      if (state.isComplete) return
      if (state.onRequesting) return
      await getList()
    }

    const onRefresh = async() => {
      console.log('onRefresh')
      state.refresherTriggered = true
      state.dataList = []
      state.isComplete = false
      await getList()
      state.refresherTriggered = false
    }

    return {
      ...toRefs(state),
      getList,
      onBottom,
      onRefresh,
      loadMore
    }
  }
})

</script>
