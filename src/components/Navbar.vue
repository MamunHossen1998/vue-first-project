<template>
    <div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Info</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:'AppNavbar'
}
</script>
<style>
    nav{
        text-align: center;
    }
    nav ul{
        padding: 0;
    }
    nav li{
        display:inline-block;
        list-style-type: none;
        margin: 0;
        padding: 8px; 
    }

</style>
 