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
        <v-text-field
          label="제목"
          required
          v-model="notice.title"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <span class="text-h6">내용</span>
      </v-col>
      <v-col cols="10">
        <v-textarea
          label="내용"
          v-model="notice.content"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn
          class="ma-2"
          color="warning"
          dark
          @click="modifyNotice"
        >
          수정
        </v-btn>
        <v-btn
          class="ma-2"
          color="error"
          dark
          @click="deleteNotice"
        >
          삭제
        </v-btn>
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
    modifyNotice() {
      this.$axios
        .patch( 'http://localhost:8081/api/board/notice', this.notice)
        .then((res) => {
          console.log(res);
          alert("수정을 성공하였습니다.");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteNotice() {
      this.$axios
        .delete( 'http://localhost:8081/api/board/notice/' + this.notice.id)
        .then((res) => {
          console.log(res);
          alert("삭제를 성공하였습니다.");
          this.$router.go(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  data () {
    return {
      notice: {}
    }
  },
}
</script>
