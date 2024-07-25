<script setup>
  const user = useCurrentUser()
  const router = useRouter()

  onMounted(() => {
    watch(user, (currentUser, prevUser) => {
      if(prevUser && !currentUser) {
        router.replace('/login')
      }
    })
  })
</script>

<template>
  <div class="bg-slate-800 w-screen h-screen ">
    <NuxtPage />
  </div>
</template>
