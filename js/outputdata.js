function generalOutput(collectionName, limit) {
    db.collection(collectionName).limit(limit).get().then((snapshot) => {
        let html = '';
        const formlist = document.getElementById("formlist");
        snapshot.docs.forEach(doc => {
            const guide = doc.data();
            console.log(guide);

            const content = `
                                        
                                <tr>
                                    <td>${guide.length}</td>
                                    <th scope="row">${guide.fullname}</th>
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

    });
}


window.onload = function () {
    generalOutput('slc', 10000);
    // console.log('great')
    
    // dashboardevent('blog',10);
    // getSingleBlogPage();

    // this.alert('na we dey here');
}


