<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <span class="text-h5">공지사항</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <span class="text-h6">제목</span>
      </v-col>
      <v-col cols="10">
        <span class="text-h6">{{ notice.title }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <span class="text-h6">내용</span>
      </v-col>
      <v-col cols="10">
        <span class="text-h6">{{ notice.content }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {

  mounted(){
    this.getNotice( this.$route.params.id );
  },

  methods: {
    getNotice( id ) {
      this.$axios
        .get( 'http://localhost:8081/api/board/notice/' + id)
        .then((res) => {
          console.log(res);
          this.notice = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  data () {
    return {
      notice: {}
    }
  },
}
</script>
