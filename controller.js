const data=require('./data');
// post data
const createAccount=(req,res) => {

    const {name,email}=req.body;
    console.log(`${name} ${email}`);
    data.push(req.body);
    res.status(200).send(data)
};
// Get data
const getPeople=(req,res) => {
    res.status(200).send(data)
}
//edit data
const editPeople=(req,res) => {
    console.log("req.params,",req.params);
    const { id } = req.params;
    const {name,email}=req.body;

    const person=data.find(person => {
        return person.id === Number(id)
    });
    console.log("Person ", person);
    if(name){
        person.name=name;
    }
 if(email){
        person.email=email;
    }
    res.status(200).send(data)
}
// delete data
const deletePeople=(req,res) => {
    console.log("req.params,",req.params);
    const { id } = req.params;
    const person=data.find(person => {
        return person.id === Number(id)
    });
    if(!person) {
        console.log("person",person);
        return res.status(404).send("Person not found")
    }
    console.log("Person ", person);
    data.splice(data.indexOf(person),1);
    res.status(200).send(data)
}
module.exports = {createAccount,getPeople,editPeople, deletePeople};