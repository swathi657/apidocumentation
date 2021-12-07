<template>
  <section>
    <div class="heading" align="center">
      <h2>ADD API URL</h2>
    </div>
    <div class="adding-url">
      <el-form
        ref="form"
        :model="form"
        label-width="200px"
        label-position="top"
      >
        <el-row :gutter="30">
          <el-col :span="8">
            <el-form-item label="Project Name">
              <el-input v-model="form.project"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Version">
              <el-input v-model="form.version"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="8">
            <el-form-item label="Documentation Url">
              <el-input v-model="form.documentation_url"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Api Url">
              <el-input v-model="form.api_url"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="8">
            <el-form-item label="Postman Collection Url">
              <el-input v-model="form.postman_collection_url"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Postman Env url">
              <el-input v-model="form.postman_env_url"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="buttons" align="center">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button @click="addApi">Save</el-button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        project: "",
        version: "",
        api_url: "",
        documentation_url: "",
        postman_collection_url: "",
        postman_env_url: "",
      },
    };
  },
  methods: {
    cancelForm() {
      this.$router.push("/");
    },
    async addApi() {
      await this.$store.dispatch("doc/addApiUrl", this.form);
      this.$router.push("/");
    },
  },
};
</script>
<style>
body {
  text-align: center;
}
.adding-url {
  display: inline-block;
  width: 50%;
  padding-left: 10em;
}
</style>