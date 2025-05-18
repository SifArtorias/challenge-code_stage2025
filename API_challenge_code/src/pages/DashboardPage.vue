<script setup>
import { SignInButton, SignedIn, SignedOut, UserButton } from 'vue-clerk'
import { CreateOrganization } from 'vue-clerk'
</script>

<template>
  <header>
    <h1>Dashboard</h1>
    <SignedIn>
      <UserButton />
    </SignedIn>
    <SignedOut>
      <SignInButton />
    </SignedOut>
  </header>
  <CreateOrganization />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 20;
}
</style>
