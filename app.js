const express = require('express')
const app = express()
const port = 4000

app.get('/api/profile', (req, res)=>{
  res.status(200).json({
    status:200,
    message:'Success',
    data:{
      user_id:1,
      name:'Abu Zubayr'
    }
  })
})

app.listen(port, () => {
  console.log(`started on port ${port}`)
})
