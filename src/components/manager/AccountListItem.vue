<template>
<tr>
  <td>{{ id }}</td>
  <td>
    <div class="u-FlexBox u-FlexBox--middle">
      <a class="u-TextEllipsis1line u-TextMinWidth _20em" @click="handleClick" href="javascript:;">{{ name }}</a>
    </div>
  </td>
  <td class="u-TextCenter u-TextNoWrap">999</td>
  <td class="u-TextCenter u-TextNoWrap">999</td>
  <td class="u-TextCenter">
    <router-link :to="{name: 'ManagerReport', query: { filter: 'account' }}" exact-active-class="is-active" class="c-Button _element"><chart-line theme="filled"/></router-link>
  </td>
  <td class="u-TextCenter">
    <router-link :to="{name: 'ManagerUsers'}" exact-active-class="is-active" class="c-Button _element"><every-user theme="outline"/></router-link>
  </td>
  <td class="u-TextBreakWord">2021/10/10 00:00</td>
</tr>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ChartLine, EveryUser } from '@icon-park/vue-next';

export default {
  components: {
    ChartLine,
    EveryUser,
  },
  props: {
    id: {
      type: Number,
      default: 1
    },
    sid: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();

    const handleClick = () => {
      store.dispatch('setSelectedSupplier', store.getters.getSupplierById(props.id))
      router.push({ name: 'UserHome' })
    }
    return {
      handleClick,
    }
  }
}
</script>
