
const express = require('express');
const app = express();

app.use(express.jason());

const courses=[
    {id:1, name: 'course1'}
    {id:2, name: 'course2'}
    {id:3, name: 'course3'}
]

app.get('/',(req, res) =>  {
    res.send('hello world');
});

app.get('/api/courses', (req, res)=>{
    res. send(courses);
});

app.post('/api/courses', (req,res)=> {
    const schema= {
        name :joy.string(),min(3),required()
    }

    if (!req.body.name || req.body.name.length<3){
        res.status(400).send
        return;
    }
     const course={
         id: courses.length+1,
         name: req.body.name
     };
     course.push(course);
     res.send(course);
}); 

app.put('/api/course/id', (req.res) => {
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if (course) res.status(404).send('this course of given id was not found');   

}

app.get('/apl/course/:id', (req, res)=>{
   const course = courses.find(c=>c.id===parseInt(req.params.id));
   if (course) res.status(404).send('this course of given id was not found');
   res.send('couses');

   const schema= {
    name :joy.string(),min(3),required()
}

if (!req.body.name || req.body.name.length<3){
    res.status(400).send
    return;
}
}); 

app.listen(3000, () => {console.log('listening on port 3000')});