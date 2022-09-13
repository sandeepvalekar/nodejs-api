import express from 'express';
import {v4 as uuidv4} from 'uuid' ;


const router =express.Router();
const users = [];

//all routes in here are starting with 
router.get('/',(req,res)=>{
  

  res.send(users);
});

router.post('/',(req,res)=>{
  const user =req.body;

const userWithId={...user,id:uuidv4()}

  users.push(userWithId);

  res.send(`User with the name ${user.firstname} added to the database ! `);
});

router.get('/:id',(req,res)=>{
const {id} =req.params;

 const foundUser= users.find((user)=>user.id  =id );

  res.send(foundUser);
});
router.delete('/:',(req,res)=>{
  const { id }=req.params;

  users = users.filter((user)=>user.id )

  res.send(`User with the id ${id} deleted from database.`)
});
router.patch(':id',(req,res)=>{
  const { id }=req.params;
  const {firstname,lastname,age}=req.body;

  if(firstName) user.firstName=firstName;
  if (lastName)user.lastName=lastName;
  if (age) user.age=age;
   
  res.send('User with the id ${id} has  been updated');
  
})

export default router ;

