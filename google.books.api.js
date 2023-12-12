// https://www.googleapis.com/books/v1/volumes?printType=books&q=harrypotter

export const getGoogleBooksData = () => {


  const data = {
    "kind": "books#volumes",
    "totalItems": 334,
    "items": [
      {
        "kind": "books#volume",
        "id": "GZAoAQAAIAAJ",
        "etag": "H9iqXZCEMhk",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/GZAoAQAAIAAJ",
        "volumeInfo": {
          "title": "Harry Potter and the Deathly Hallows",
          "authors": [
            "J. K. Rowling"
          ],
          "publishedDate": "2007",
          "description": "\"The final adventure in J.K. Rowling's phenomenal, best-selling Harry Potter book series\"--Provided by publisher.",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "UCSC:32106019703807"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 792,
          "printType": "BOOK",
          "categories": [
            "Bildungsromans"
          ],
          "averageRating": 4.5,
          "ratingsCount": 92,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "6.5.2.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=GZAoAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=GZAoAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=GZAoAQAAIAAJ&q=harrypotter&dq=harrypotter&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=GZAoAQAAIAAJ&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Deathly_Hallows.html?hl=&id=GZAoAQAAIAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=GZAoAQAAIAAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "&quot;The final adventure in J.K. Rowling&#39;s phenomenal, best-selling Harry Potter book series&quot;--Provided by publisher."
        }
      },
      {
        "kind": "books#volume",
        "id": "4mtauAEACAAJ",
        "etag": "5jAyZBPL894",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/4mtauAEACAAJ",
        "volumeInfo": {
          "title": "Harry Potter and the Prisoner of Azkaban",
          "authors": [
            "J. K. Rowling"
          ],
          "publisher": "Arthur A. Levine Books",
          "publishedDate": "2018-06-26",
          "description": "Harry Potter must confront the devious and dangerous wizard responsible for his parents' deaths.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "1536443743"
            },
            {
              "type": "ISBN_13",
              "identifier": "9781536443745"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 734,
          "printType": "BOOK",
          "categories": [
            "Escaped prisoners"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=4mtauAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=4mtauAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=4mtauAEACAAJ&dq=harrypotter&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=4mtauAEACAAJ&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Prisoner_of_Azkaban.html?hl=&id=4mtauAEACAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=4mtauAEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Harry Potter must confront the devious and dangerous wizard responsible for his parents&#39; deaths."
        }
      },
      {
        "kind": "books#volume",
        "id": "PRL-jg9aO7YC",
        "etag": "Ozi88/Xjfsg",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/PRL-jg9aO7YC",
        "volumeInfo": {
          "title": "Harry Potter, the Familiar Hero",
          "authors": [
            "Maximilian Horsthemke"
          ],
          "publisher": "GRIN Verlag",
          "publishedDate": "2011-05",
          "description": "Bachelor Thesis from the year 2010 in the subject English Language and Literature Studies - Literature, grade: 1,3, Ruhr-University of Bochum (Anglistik/Amerikanistik), language: English, abstract: Since the publication of the first book in the series in 1997, Harry Potter has become a worldwide phenomenon. One can think of several explanations for this lasting popularity. Maybe one reason for it lies in the use of certain archetypes and story arcs that can be found in popular tales. This thesis will examine in what way and to what extent Harry Potter can be added to the archetypal heroes the American mythologist Joseph Campbell has described in his book \"The Hero with a Thousand Faces\" in 1949, first by lining out the different stages Campbell laid out in his book and then by applying them to the Harry Potter novels. The analysis is divided according to the three stages Campbell uses (Departure - Initiation - Return).",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9783640903726"
            },
            {
              "type": "ISBN_10",
              "identifier": "3640903722"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 77,
          "printType": "BOOK",
          "categories": [
            "Heroes in literature"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.3.4.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=PRL-jg9aO7YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=PRL-jg9aO7YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=PRL-jg9aO7YC&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=PRL-jg9aO7YC&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_the_Familiar_Hero.html?hl=&id=PRL-jg9aO7YC"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_the_Familiar_Hero-sample-pdf.acsm?id=PRL-jg9aO7YC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=PRL-jg9aO7YC&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Bachelor Thesis from the year 2010 in the subject English Language and Literature Studies - Literature, grade: 1,3, Ruhr-University of Bochum (Anglistik/Amerikanistik), language: English, abstract: Since the publication of the first book in ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "DKcWE3WXoj8C",
        "etag": "q80bxFYZXiU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/DKcWE3WXoj8C",
        "volumeInfo": {
          "title": "Harry Potter and International Relations",
          "authors": [
            "Daniel H. Nexon",
            "Iver B. Neumann"
          ],
          "publisher": "Rowman & Littlefield",
          "publishedDate": "2006",
          "description": "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry's world contain aspects of our own. It also includes chapters on the political economy of the franchise, and on the problems of studying popular culture.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0742539598"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780742539594"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 262,
          "printType": "BOOK",
          "categories": [
            "Political Science"
          ],
          "averageRating": 3.5,
          "ratingsCount": 8,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.2.2.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=DKcWE3WXoj8C&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=DKcWE3WXoj8C&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_International_Relations.html?hl=&id=DKcWE3WXoj8C"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_International_Relations-sample-pdf.acsm?id=DKcWE3WXoj8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=DKcWE3WXoj8C&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry&#39;s world contain aspects of our own."
        }
      },
      {
        "kind": "books#volume",
        "id": "L18VBQAAQBAJ",
        "etag": "UEil3Tw96iI",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/L18VBQAAQBAJ",
        "volumeInfo": {
          "title": "The Psychology of Harry Potter",
          "subtitle": "An Unauthorized Examination Of The Boy Who Lived",
          "authors": [
            "Neil Mulholland"
          ],
          "publisher": "BenBella Books",
          "publishedDate": "2007-04-10",
          "description": "Harry Potter has provided a portal to the wizarding world for millions of readers, but an examination of Harry, his friends and his enemies will take us on yet another journey: through the psyche of the Muggle (and wizard!) mind. The twists and turns of the series, as well as the psychological depth and complexity of J. K. Rowling’s characters, have kept fans enthralled with and puzzling over the many mysteries that permeate Hogwarts and beyond: • Do the Harry Potter books encourage disobedience? • Why is everyone so fascinated by Professor Lupin? • What exactly will Harry and his friends do when they finally pass those N.E.W.T.s? • Do even wizards live by the ticking of the clock? • Is Harry destined to end up alone? And why did it take Ron and Hermione so long to get together? Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy series of all time. Grab a spot on the nearest couch, and settle in for some fresh revelations about our favorite young wizard!",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781932100884"
            },
            {
              "type": "ISBN_10",
              "identifier": "1932100881"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 338,
          "printType": "BOOK",
          "categories": [
            "Literary Criticism"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.2.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=L18VBQAAQBAJ&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=L18VBQAAQBAJ&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Psychology_of_Harry_Potter.html?hl=&id=L18VBQAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=L18VBQAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy ..."
        }
      },
      {
        "kind": "books#volume",
        "id": "1NzAS0KZGV4C",
        "etag": "lrR/xCSpDb8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/1NzAS0KZGV4C",
        "volumeInfo": {
          "title": "Heroism in the Harry Potter Series",
          "authors": [
            "Katrin Berndt",
            "Lena Steveker"
          ],
          "publisher": "Ashgate Publishing, Ltd.",
          "publishedDate": "2011",
          "description": "This collection examines the ways fictional heroism in the twenty-first century challenges the idealized forms of a somewhat simplistic masculinity associated with genres like the epic, romance and classic adventure story. The collection's three sections address broad issues related to genre, Harry Potter's development as the central heroic character and the question of who qualifies as a hero in the Harry Potter series.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "140941244X"
            },
            {
              "type": "ISBN_13",
              "identifier": "9781409412441"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 256,
          "printType": "BOOK",
          "categories": [
            "Literary Criticism"
          ],
          "averageRating": 2.5,
          "ratingsCount": 8,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.4.7.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=1NzAS0KZGV4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=1NzAS0KZGV4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=1NzAS0KZGV4C&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=1NzAS0KZGV4C&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Heroism_in_the_Harry_Potter_Series.html?hl=&id=1NzAS0KZGV4C"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Heroism_in_the_Harry_Potter_Series-sample-epub.acsm?id=1NzAS0KZGV4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Heroism_in_the_Harry_Potter_Series-sample-pdf.acsm?id=1NzAS0KZGV4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=1NzAS0KZGV4C&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This collection examines the ways fictional heroism in the twenty-first century challenges the idealized forms of a somewhat simplistic masculinity associated with genres like the epic, romance and classic adventure story."
        }
      },
      {
        "kind": "books#volume",
        "id": "F8npAAAAMAAJ",
        "etag": "ItAJTq6ovqA",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/F8npAAAAMAAJ",
        "volumeInfo": {
          "title": "Muggles and Magic",
          "subtitle": "J.K. Rowling and the Harry Potter Phenomenon",
          "authors": [
            "George W. Beahm"
          ],
          "publishedDate": "2004",
          "description": "A treasure trove of information and trivia about Harry Potter, J.K. Rowling's most famous literary creation, and the phenomenon that surrounds him.",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "PSU:000054702431"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 440,
          "printType": "BOOK",
          "categories": [
            "Children's stories, English"
          ],
          "averageRating": 4,
          "ratingsCount": 7,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.5.4.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=F8npAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=F8npAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=F8npAAAAMAAJ&q=harrypotter&dq=harrypotter&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=F8npAAAAMAAJ&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Muggles_and_Magic.html?hl=&id=F8npAAAAMAAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=F8npAAAAMAAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "A treasure trove of information and trivia about Harry Potter, J.K. Rowling&#39;s most famous literary creation, and the phenomenon that surrounds him."
        }
      },
      {
        "kind": "books#volume",
        "id": "7JnvDwAAQBAJ",
        "etag": "eqr9fnjZeyI",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/7JnvDwAAQBAJ",
        "volumeInfo": {
          "title": "Harry Potter Film Vault: Forest, Lake, and Sky Creatures",
          "authors": [
            "Insight Editions"
          ],
          "publisher": "Simon and Schuster",
          "publishedDate": "2020-11-24",
          "description": "An insider’s look at how artists and creature designers brought Thestrals, Grindylows, Acromantula, dragons, and more to cinematic life. From centaurs to merpeople and horn-tailed dragons, magical creatures and terrifying beasts are key characters in the Harry Potter films. Harry Potter Film Vault: Volume 1: Forest, Lake, and Sky Creatures features illustrations and behind-the-scenes photography that give fans an in-depth look at the development and creation of the magnificent creatures seen throughout the movies. The Film Vault compiles the filmmaking secrets and visionary artistry behind the Harry Potter films into a series of twelve deluxe collectible volumes. Intricately designed and packed with gorgeous concept art and unit photography from the Warner Bros. archive, each volume in the series gives fans striking insights about bringing the Wizarding World to the big screen. Praise for the Harry Potter Film Vault series “A detailed, behind-the-scenes look at creating some aspect of the wizarding world for the films.” —The Leaky Cauldron “These are great! They’re gorgeous, and because they break down the different aspects of the films into twelve volumes, they may have more detail than some of the other compendiums out there . . . these might just be my new favorite Potter film books.” —MuggleNet “[A] super cool behind the scenes series of the Harry Potter films . . . Twelve volumes that take the viewer on distinct adventures that unveil various aspects of the beloved movies.” —Apartment Therapy “You’re going to want to collect them all.” —Wizards and Whatnot",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781647223151"
            },
            {
              "type": "ISBN_10",
              "identifier": "1647223156"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "pageCount": 70,
          "printType": "BOOK",
          "categories": [
            "Performing Arts"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "3.6.3.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=7JnvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=7JnvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=7JnvDwAAQBAJ&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=7JnvDwAAQBAJ&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_Film_Vault_Forest_Lake_and.html?hl=&id=7JnvDwAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_Film_Vault_Forest_Lake_and-sample-epub.acsm?id=7JnvDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_Film_Vault_Forest_Lake_and-sample-pdf.acsm?id=7JnvDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=7JnvDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Intricately designed and packed with gorgeous concept art and unit photography from the Warner Bros. archive, each volume in the series gives fans striking insights about bringing the Wizarding World to the big screen."
        }
      },
      {
        "kind": "books#volume",
        "id": "DQQhCwAAQBAJ",
        "etag": "HBIEbUKINXA",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/DQQhCwAAQBAJ",
        "volumeInfo": {
          "title": "Harry Potter and the Chamber of Secrets",
          "authors": [
            "J.K. Rowling"
          ],
          "publisher": "Pottermore Publishing",
          "publishedDate": "2015-12-08",
          "description": "'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.' Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true. Having become classics of our time, the Harry Potter eBooks never fail to bring comfort and escapism. With their message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781781100509"
            },
            {
              "type": "ISBN_10",
              "identifier": "1781100500"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 325,
          "printType": "BOOK",
          "categories": [
            "Fiction"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "1.3.4.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=DQQhCwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=DQQhCwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=DQQhCwAAQBAJ&dq=harrypotter&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=DQQhCwAAQBAJ&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Chamber_of_Secrets.html?hl=&id=DQQhCwAAQBAJ"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=DQQhCwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "With their message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers."
        }
      },
      {
        "kind": "books#volume",
        "id": "gal9MtXKC68C",
        "etag": "NMA1Op9jhqA",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/gal9MtXKC68C",
        "volumeInfo": {
          "title": "‏هيرى پوٹر اور رازوں کا کمره :‏",
          "subtitle": "‏جے. کے. رولنگ، کى شهرۀ آفاق کهانى کا اردو ترجمه /‏",
          "authors": [
            "J. K. Rowling"
          ],
          "publisher": "Oxford University Press, USA",
          "publishedDate": "2004",
          "description": "An Urdu language edition of the second Harry Potter tale.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0195798767"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780195798760"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 314,
          "printType": "BOOK",
          "categories": [
            "England"
          ],
          "averageRating": 4,
          "ratingsCount": 46,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.4.4.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=gal9MtXKC68C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=gal9MtXKC68C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "ur",
          "previewLink": "http://books.google.com/books?id=gal9MtXKC68C&printsec=frontcover&dq=harrypotter&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=gal9MtXKC68C&dq=harrypotter&hl=&as_pt=BOOKS&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/%D9%87%D9%8A%D8%B1%D9%89_%D9%BE%D9%88%D9%B9%D8%B1_%D8%A7%D9%88%D8%B1_%D8%B1%D8%A7%D8%B2%D9%88%DA%BA_%DA%A9%D8%A7.html?hl=&id=gal9MtXKC68C"
        },
        "saleInfo": {
          "country": "IL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "IL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/%D9%87%D9%8A%D8%B1%D9%89_%D9%BE%D9%88%D9%B9%D8%B1_%D8%A7%D9%88%D8%B1_%D8%B1%D8%A7%D8%B2%D9%88%DA%BA_%DA%A9%D8%A7-sample-pdf.acsm?id=gal9MtXKC68C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=gal9MtXKC68C&hl=&as_pt=BOOKS&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "An Urdu language edition of the second Harry Potter tale."
        }
      }
    ]
  }

  
  return Promise.resolve(data)

}