<template>
<tr>
  <td>{{ id }}</td>
  <td>
    <div class="u-FlexBox u-FlexBox--middle">
      <a class="u-TextEllipsis1line u-TextMinWidth _20em" @click="handleClick" href="javascript:;">{{ name }}</a>
    </div>
  </td>
  <td>{{ email }}</td>
  <td class="u-TextBreakWord">2021/10/10 00:00</td>
  <td class="u-TextBreakWord">2021/10/10 00:00</td>
</tr>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  components: {
  },
  props: {
    id: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  setup(props) {
    const router = useRouter();

    const handleClick = () => {
      router.push({ name: 'ManagerUsersEdit', params: { user_id: props.id }})
    }
    return {
      handleClick,
    }
  }
}
</script>
