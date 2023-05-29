<script setup>
import { useTerraformStore } from './useTerraformStore'
const results = ref([])
const instance = getCurrentInstance();
const router = useRouter()


const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});

const TerraformStore = useTerraformStore()

const postApply = async () => {
  try {
    const response = await TerraformStore.postApply({});
    results.value = response;
    // 결과값을 이벤트를 통해 전달
  } catch (error) {
    console.error(error);
  }
}

const submitApply = async () => {
  try {
    await postApply(); // postApply 함수 호출
    instance.emit('clickNextTab'); // 다음 탭으로 이동하는 이벤트 발생
    instance.emit('apply-results', results.value); // apply-results 값을 전달
  } catch (error) {
    console.error(error);
  }
}

const goBack = () => {
  instance.emit('goBack');
}

</script>

<template>
  <VForm @submit.prevent="() => {}" method="post">

    <VCol cols="12">
      <VCard title="PLAN 결과">
        <VCardText>
          <p> plan 결과 : {{ data }}</p>
          <!--<VTextarea v-model="props.data['apply-results']" rows="5"></VTextarea>-->
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" class="d-flex flex-wrap gap-4">
      <VBtn @click="submitApply" type="submit">
        Apply
      </VBtn>
      <VBtn @click="goBack" color="secondary" variant="tonal">
        뒤로 가기
      </VBtn>
    </VCol>
  </VForm>
</template>
