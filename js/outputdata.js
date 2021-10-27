function generalOutput(collectionName, limit) {
    db.collection(collectionName).limit(limit).get().then((snapshot) => {
        let html = '';
        const formlist = document.getElementById("formlist");
        const formCounter = document.getElementById("formCounter");
        snapshot.docs.forEach(doc => {
            const guide = doc.data();
            console.log(guide);
            // console.log(snapshot.size)

            const content = `
                                        
                                <tr>
                                   
                                    <td scope="row">${guide.fullname}</td>
                                    <td>${guide.email}</td>
                                    <td>${guide.phonenumber}</td>
                                    <td>${guide.address}</td>
                                    <td>${guide.city}</td>
                                    <td>${guide.state}</td>
                                 
                                    
                                </tr>
                
                    `;

            html += content
            console.log(doc.id);

            // console.log(li)
        });

        formData.innerHTML = html;
        formCounter.innerHTML = snapshot.size;

    });
}


window.onload = function () {
    generalOutput('slc', 10000);
    // console.log('great')
    
    // dashboardevent('blog',10);
    // getSingleBlogPage();

    // this.alert('na we dey here');
}


