<template>
    <div class="wrapper d-flex">
        <div class="w-100 p-sm-5 align-self-sm-center">
            <div class="h1 text-center">Register</div>
            <form @submit.prevent="submit">
                <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label"
                        >Email address</label
                    >
                    <div class="col-sm-10">
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            v-model="registerForm.email"
                        />
                    </div>
                    <small
                        id="emailHelp"
                        class="form-text text-muted col-sm-10 offset-sm-2"
                        >We may share your email with anyone else.</small
                    >
                </div>
                <div class="form-group row">
                    <label for="displayName" class="col-sm-2 col-form-label"
                        >Display name</label
                    >
                    <div class="col-sm-10">
                        <input
                            type="text"
                            class="form-control"
                            id="displayName"
                            v-model="registerForm.displayName"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-sm-2 col-form-label"
                        >Password</label
                    >
                    <div class="col-sm-10">
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            v-model="registerForm.password"
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="confirmPassword" class="col-sm-2 col-form-label"
                        >Confirm Password</label
                    >
                    <div class="col-sm-10">
                        <input
                            type="password"
                            class="form-control"
                            id="confirmPassword"
                            v-model="registerForm.confirmPassword"
                        />
                    </div>
                </div>

                <button type="submit" class="btn btn-primary mr-1">
                    Submit
                </button>
                <router-link :to="{ name: 'Login' }">
                    <button type="button" class="btn btn-info">
                        Already have an account? Click here!
                    </button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            registerForm: {
                email: '',
                displayName: '',
                password: '',
                confirmPassword: ''
            }
        };
    },
    methods: {
        submit: function() {
            console.log(this.registerForm);
            this.$router.push({ name: 'Login' });
        }
    }
};
</script>

<style scoped></style>
