<script setup>

    import { signOut } from 'firebase/auth'
    
    const auth = useFirebaseAuth()
    const user = useCurrentUser()

    function handleSignOut() {
        signOut(auth)
    }
</script>

<template>
    <div class="flex flex-col">

        <!-- <div v-if="user" class="w-full justify-center items-center flex flex-col gap-2 "> -->
            <!-- <div class="flex flex-row gap-4">
                <img :src="user.photoURL" alt="user photo" class="w-20 h-20 rounded-full">
                <span>Nombre: {{ user.displayName }}</span>
            </div> -->
            <!-- <UButton @click="handleSignOut" color="red" variant="solid">Cerrar sesión</UButton> -->
        <!-- </div> -->

        <!-- <div v-else class="w-full justify-center items-center flex flex-col gap-2 p-4 m-4">
            <span>User not signed in or loading...</span>
        </div> -->


        <div class="w-screen h-10 p-4 bg-lime-600 flex flex-row justify-between items-center">
            <span>Recetas Online</span>
            <span>UserComponent</span>
        </div>

    </div>
</template>