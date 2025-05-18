<script setup>
import {
  OrganizationSwitcher,
  useOrganization,
  useAuth,
  useUser
} from 'vue-clerk'

const { organization } = useOrganization()
const { user } = useUser()

</script>

<template>
  <div class="p-6">
    <OrganizationSwitcher />
    
    <div class="mt-4">
      <p>Organization ID: {{ organization?.id }}</p>
      <p>User ID: {{ user?.id }}</p>
      <p v-if="!organization">Aucune organisation sélectionnée</p>
    </div>
  </div>
</template>