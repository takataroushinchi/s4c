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

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';

const props = defineProps({
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
})

const router = useRouter();

const handleClick = () => {
  router.push({ name: 'ManagerUsersEdit', params: { user_id: props.id }})
}
</script>
