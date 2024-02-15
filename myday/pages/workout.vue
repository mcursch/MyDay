<script lang="ts" setup>
import MainLayout from "~/layouts/MainLayout.vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const workouts = [
    'Workout 1',
    'Workout 2',
    'Workout 3'
]
</script>

<template>
  <MainLayout>

    <div class="bg-black text-white h-full w-full">
      <div class="container mx-auto text-white py-20" >
        <div class=" bg-blue-500 w-full rounded-lg h-[45rem] w-50">
          <div class=" bg-blue-300 p-5 rounded-t-lg">

            <button class="bg-blue-700 rounded-lg py-2 px-5">Create Workout</button>
            <button class="bg-red-700 rounded-lg py-2 px-5 mx-2">Delete Workout</button>
          </div>

          <div v-for="workout in workouts" class="my-2">
            <Disclosure>
              <DisclosureButton class="py-2 bg-blue-200 rounded-lg w-full" >
                Date and Kind
              </DisclosureButton>
              <DisclosurePanel class="text-gray-500 w-20 bg-black">
                Workout Specifics
              </DisclosurePanel>
            </Disclosure>
          </div>

        </div>



      </div>
    </div>





  </MainLayout>

</template>

<style scoped></style>
