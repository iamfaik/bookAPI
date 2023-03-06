$('button').on('click', function () {
    $('.page-2').empty()
    var text = $('input').val();
    $(".page-1").css("display", "none");
    $(".page-2").css("display","flex")
    $.ajax({
        method: 'GET',
        url: `https://www.googleapis.com/books/v1/volumes?q=${text}&key=AIzaSyCf4n8DMyfeclDwRyBNlxiXjQPmcfLKkFI`
    }).then(function (response) {
        for (var i = 0; i < 9; i++) {
            var picture=document.createElement('img');
            var title=document.createElement('h4')
            var authors=document.createElement('h5')
            var categories=document.createElement('h5')
            var pagecount=document.createElement('h6')
            var publisher=document.createElement('h6')
            var publishdate=document.createElement('h6')
            var book=document.createElement('div')
            picurl=response.items[i].volumeInfo.imageLinks.thumbnail
            picture.setAttribute('src',picurl)           
            $(title).text(`Title : ` + response.items[i].volumeInfo.title)
            $(authors).text(`Authors : ` + response.items[i].volumeInfo.authors)
            if(response.items[i].volumeInfo.categories==undefined){
                $(categories).css("display","none")
            }
            else{
                $(categories).text(`Categories : ` + response.items[i].volumeInfo.categories  )
            }
            
            $(pagecount).text(`Page count : ` + response.items[i].volumeInfo.pageCount  )
            $(publisher).text(`Publisher : ` + response.items[i].volumeInfo.publisher )
            $(publishdate).text(`Publish date : ` + response.items[i].volumeInfo.publishedDate)


           book.setAttribute('class','book_div')
           book.append(title)
           book.append(authors)
           book.append(categories)
           book.append(pagecount)
           book.append(publisher)
           book.append(publishdate)
           book.append(picture)
           $('.page-2').append(book)
            // $('.pagecount').text(`Page count : ` + response.items[i].volumeInfo.pageCount + " / ")
            // $('.publisher').text(`Publisher : ` + response.items[i].volumeInfo.publisher)
            // $('.publishdate').text(`Publish date : ` + response.items[i].volumeInfo.publishedDate)
            // $('.description').text(`Description : ` + response.items[i].volumeInfo.description)
        }
        console.log(response);
    }).catch(function (error) {

    })
})