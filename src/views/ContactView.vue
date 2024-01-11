<template>
    <div class="container-fluid">
    <div class="ROW justify-content-start">
        <div class="formy">
            <form action="#">
                <div class="mb-3 mt-3">
                    <label for="firstName" class="form-label">First Name:</label>
                    <input type="FirstName" class="form-control" id="firstName" placeholder="Enter First Name" name="FirstName">
                </div>
                <div class="mb-3 mt-3">
                    <label for="lastName" class="form-label">Last Name:</label>
                    <input type="lastName" class="form-control" id="lastName" placeholder="Enter Last Name" name="lastName">
                </div>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email Address:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email">
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Password:</label>
                    <input type="password" class="form-control" name="pswd" id="pwd" placeholder="Enter Password">
                </div>
                <div class="form-check mb-3">
                    <label for="pwd" class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember">Remember Me?
                    </label>
                </div>
                <label for="message">Your Message:</label>
                <div>
                    <textarea name="form-control" id="message" rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.formy {
  background: rgb(224, 224, 241);
  border-radius: 10px;
  margin: 1%;
  padding: 5px 10px;
  box-sizing: border-box;
  transition: 0.5s;
}

.ROW {
  height: 97vh;
  padding: 3%;
  padding-left: 10%;
  padding-right: 10%;
}

input {
    text-align: center;
}

</style>