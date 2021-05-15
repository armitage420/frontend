import Person from "./person.js";

const Asha = new Person(
    "Asha Sharma",
    24,
    "Web dev",
    "Computer Science",
    "Roasted chicken",
    "female",
    true
);

const content = `
    <main>
        <article>
            <h1>${Asha.name}</h1>
            <ul>
                <li>Age: ${Asha.age}</li>
                <li>Occupation: ${Asha.identity.occupation}</li>
                <li>Field: ${Asha.identity.field}</li>
                <li>Fav Food: ${Asha.favFood}</li>
                <li>Gender: ${Asha.gender}</li>
                <li>Open for jobs: ${Asha.openForJobs}</li>
            </ul>
        </article>
    </main>
`;

document.body.innerHTML = content;
console.log("Asha:", Asha);
console.log("Age:", Asha.age);