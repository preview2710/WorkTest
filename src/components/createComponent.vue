<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!--Display-->
            <h1>Create Info</h1>
            <form @submit.prevent="handleSubmitForm">
                <p v-if="errorPresent" class="error">Please fill out both fields!</p>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="info.name" required>
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="email" class="form-control" v-model="info.email" required>
                </div>
                <div class="form-group">
                    <label for="name">Phone</label>
                    <input type="text" class="form-control" v-model="info.phone" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-success btn-block">Submit</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return{
            info:{
                name:'',
                email:'',
                phone:''
            },
            props:{
                name: {
                    type: String,
                    required: true,
                    unique: true
                },
                email: {
                    type: String,
                    required: true,
                    unique: true
                },
                phone: {
                    type: Number,
                    required: true
                }
            }
        }
    },
    methods:{
        handleSubmitForm(){
            let apiURL = 'http://localhost:4000/api/create-info'

            axios.post(apiURL, this.info).then(() => {
                this.$router.push('/view')
                this.info = {
                    name:'',
                    email:'',
                    phone:''
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>