<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h1>Edit Info</h1>
            <form @submit.prevent="handleUpdateForm">
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
                    <button class="btn btn-primary btn-block">Update</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            info: {}
        }
        
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-info/${this.$route.params.id}`
        axios.get(apiURL).then((res) => {
            this.info = res.data
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-info/${this.$route.params.id}`
            axios.put(apiURL, this.info).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
        }
    }
    
}
</script>