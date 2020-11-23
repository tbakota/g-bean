<template>
    <div class="wrapper d-flex">
        <div class="w-100 p-sm-5 align-self-sm-center">
            <div class="h1 text-center">Login</div>
            <form @submit.prevent="submit">
                <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label"
                        >Email address</label
                    >
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" />
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
                        />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mr-1">
                    Login
                </button>
                <router-link :to="{ name: 'Register' }">
                    <button type="button" class="btn btn-secondary">
                        Don't have an account? Click here!
                    </button>
                </router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        submit: function() {
            console.log(this.loginForm);
            this.$router.push({ name: 'Tasks' });
        }
    }
};
</script>

<style scoped></style>
