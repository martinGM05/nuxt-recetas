<script setup>

    import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

    const auth = useFirebaseAuth()
    const router = useRouter()

    function signInWithGoogle() {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then( _ => router.replace('/'))
    }

</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="flex flex-col w-[500px] h-auto shadow-2xl shadow-green-500 m-3 p-4 rounded-md">
        <span class="text-2xl self-center font-semibold mt-5 text-gray-200">Bienvenido a Recetas Online</span>
        <UButton @click="signInWithGoogle" size="xl" variant="solid" class="self-center mt-5 " color="emerald">
            <Icon name="logos:google" style="color: black" />
            <span>Iniciar sesión con Google</span>
        </UButton>
    </div>
  </div>
</template>
