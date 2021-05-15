class Person{
    constructor(
        name,
        age,
        occ,
        fld,
        favFood,
        gender,
        openForJobs
    ){
        this.name = name;
        this.age = age;
        this.identity = {
            occupation: occ,
            field: fld
        };
        this.favFood = favFood;
        this.gender = gender;
        this.openForJobs = openForJobs;
    }

    toggleJobStatus(jobStatus){
        this.openForJobs = jobStatus;
    }

    newIdentity(occu, fild){
        this.identity.occupation = occu;
        this.identity.field = fild;
    }
}

export default Person;