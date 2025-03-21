import { Event } from "@/types";

export const events = [
    {
        id: '1',
        title: 'City Music Festival',
        date: '2025-03-15',
        location: 'Central Park',
        category: 'Entertainment',
        description: 'A day-long festival featuring various music bands and artists from around the city.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '2',
        title: 'Art in the Park',
        date: '2025-03-22',
        location: 'House of Wisdom',
        category: 'Art',
        description: 'An outdoor art exhibition showcasing local artists and their work.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '3',
        title: 'Food Truck Rally',
        date: '2025-03-05',
        location: 'Founder Plaza',
        category: 'Social',
        description: 'A gathering of the best food trucks in the city offering a variety of cuisines.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '4',
        title: 'Tech Conference 2023',
        date: '2025-03-12',
        location: 'Convention Center',
        category: 'Tech',
        description: 'A conference featuring the latest in technology and innovation.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '5',
        title: 'Spring Fashion Show',
        date: '2025-03-18',
        location: 'The Grand Theatre',
        category: 'Art',
        description: 'A showcase of the latest spring fashion trends by top designers.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '6',
        title: 'Book Fair',
        date: '2025-03-20',
        location: 'House of Wisdom',
        category: 'Art',
        description: 'A fair featuring book signings, author talks, and a wide selection of books for sale.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '7',
        title: 'Marathon 2025',
        date: '2025-03-25',
        location: 'Central Park',
        category: 'Sports',
        description: 'A city-wide marathon open to runners of all levels.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '8',
        title: 'Film Festival',
        date: '2025-03-28',
        location: 'The Grand Theatre',
        category: 'Art',
        description: 'A festival showcasing independent films from around the world.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '9',
        title: 'Jazz Night',
        date: '2025-03-30',
        location: 'The Late Bar',
        category: 'Entertainment',
        description: 'An evening of live jazz music featuring local and visiting artists.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '10',
        title: 'Science Expo',
        date: '2025-04-02',
        location: 'Convention Center',
        category: 'Tech',
        description: 'An expo featuring interactive science exhibits and demonstrations.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '11',
        title: 'Wine Tasting',
        date: '2025-04-05',
        location: 'The Late Bar',
        category: 'Social',
        description: 'A wine tasting event featuring a selection of local wines.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '12',
        title: 'Theater Play',
        date: '2025-04-08',
        location: 'The Grand Theatre',
        category: 'Entertainment',
        description: 'A live performance of a popular theater play.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '13',
        title: 'Charity Run',
        date: '2025-04-10',
        location: 'Central Park',
        category: 'Sports',
        description: 'A charity run to raise funds for a local cause.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '14',
        title: 'Photography Exhibition',
        date: '2025-04-12',
        location: 'House of Wisdom',
        category: 'Art',
        description: 'An exhibition showcasing the work of local photographers.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '15',
        title: 'Robotics Workshop',
        date: '2025-04-15',
        location: 'Convention Center',
        category: 'Tech',
        description: 'A hands-on workshop on building and programming robots.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '16',
        title: 'Cooking Class',
        date: '2025-04-18',
        location: 'House of Wisdom',
        category: 'Social',
        description: 'A cooking class teaching participants how to prepare gourmet meals.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '17',
        title: 'Dance Competition',
        date: '2025-04-20',
        location: 'The Grand Theatre',
        category: 'Entertainment',
        description: 'A competition featuring dance performances by local dance groups.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '18',
        title: 'History Lecture',
        date: '2025-04-22',
        location: 'House of Wisdom',
        category: 'Tech',
        description: 'A lecture on a significant historical event or figure.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '19',
        title: 'Yoga Retreat',
        date: '2025-04-25',
        location: 'Founder Plaza',
        category: 'Social',
        description: 'A weekend retreat focused on yoga and wellness.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '20',
        title: 'Stand-up Comedy',
        date: '2025-04-28',
        location: 'The Late Bar',
        category: 'Entertainment',
        description: 'A night of stand-up comedy featuring local comedians.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '21',
        title: 'Gardening Workshop',
        date: '2025-05-02',
        location: 'House of Wisdom',
        category: 'Other',
        description: 'A workshop on gardening techniques and tips.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '22',
        title: 'Rock Concert',
        date: '2025-05-05',
        location: 'New Colloseum',
        category: 'Entertainment',
        description: 'A rock concert featuring popular rock bands.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '23',
        title: 'Startup Pitch',
        date: '2025-05-08',
        location: 'Convention Center',
        category: 'Tech',
        description: 'An event where startups pitch their ideas to potential investors.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '24',
        title: 'Painting Class',
        date: '2025-05-10',
        location: 'House of Wisdom',
        category: 'Art',
        description: 'A class teaching participants how to paint with different techniques.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '25',
        title: 'Cycling Tour',
        date: '2025-05-12',
        location: 'Central Park',
        category: 'Sports',
        description: 'A guided cycling tour through the city.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '26',
        title: 'Opera Night',
        date: '2025-05-15',
        location: 'The Grand Theatre',
        category: 'Entertainment',
        description: 'A night of opera performances by renowned opera singers.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '27',
        title: 'Coding Bootcamp',
        date: '2025-05-18',
        location: 'House of Wisdom',
        category: 'Tech',
        description: 'An intensive coding bootcamp for aspiring software developers.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '28',
        title: 'Meditation Session',
        date: '2025-05-20',
        location: 'Central Park',
        category: 'Other',
        description: 'A guided meditation session for relaxation and mindfulness.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '29',
        title: 'Karaoke Night',
        date: '2025-05-22',
        location: 'The Late Bar',
        category: 'Entertainment',
        description: 'A fun night of karaoke singing at a local bar.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '30',
        title: 'Chess Tournament',
        date: '2025-05-25',
        location: 'Convention Center',
        category: 'Sports',
        description: 'A chess tournament open to players of all skill levels.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '31',
        title: 'Beach Cleanup',
        date: '2025-05-28',
        location: 'Central Park',
        category: 'Other',
        description: 'A community event to clean up the city beach.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '32',
        title: 'Magic Show',
        date: '2025-06-02',
        location: 'The Grand Theatre',
        category: 'Entertainment',
        description: 'A magic show featuring amazing tricks and illusions.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '33',
        title: 'Poetry Reading',
        date: '2025-06-05',
        location: 'House of Wisdom',
        category: 'Art',
        description: 'A poetry reading event featuring local poets.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '34',
        title: 'Astronomy Night',
        date: '2025-06-08',
        location: 'House of Wisdom',
        category: 'Tech',
        description: 'A night of stargazing and learning about astronomy.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '35',
        title: 'Ballet Performance',
        date: '2025-06-10',
        location: 'The Grand Theatre',
        category: 'Art',
        description: 'A ballet performance by a renowned ballet company.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '36',
        title: 'Craft Fair',
        date: '2025-06-12',
        location: 'Founder Plaza',
        category: 'Art',
        description: 'A fair featuring handmade crafts and goods from local artisans.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '37',
        title: 'Language Exchange',
        date: '2025-06-15',
        location: 'House of Wisdom',
        category: 'Other',
        description: 'An event for people to practice and exchange languages.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '38',
        title: 'Pet Adoption Day',
        date: '2025-06-18',
        location: 'Central Park',
        category: 'Other',
        description: 'A day dedicated to finding homes for shelter animals.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '39',
        title: 'Classic Car Show',
        date: '2025-06-20',
        location: 'Convention Center',
        category: 'Other',
        description: 'A show featuring classic and vintage cars.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '40',
        title: 'Bird Watching',
        date: '2025-06-22',
        location: 'Central Park',
        category: 'Other',
        description: 'A guided bird watching tour in a nature reserve.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '41',
        title: 'Sculpture Workshop',
        date: '2025-06-25',
        location: 'House of Wisdom',
        category: 'Art',
        description: 'A workshop on creating sculptures with different materials.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '42',
        title: 'Fishing Derby',
        date: '2025-06-28',
        location: 'Central Park',
        category: 'Sports',
        description: 'A fishing competition at the city lake.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '43',
        title: 'Haunted House Tour',
        date: '2025-07-02',
        location: 'New Colloseum',
        category: 'Entertainment',
        description: 'A guided tour of a haunted house with spooky stories.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '44',
        title: 'Piano Recital',
        date: '2025-07-05',
        location: 'The Grand Theatre',
        category: 'Entertainment',
        description: 'A piano recital featuring classical and contemporary pieces.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '45',
        title: 'Volunteer Meetup',
        date: '2025-07-08',
        location: 'Convention Center',
        category: 'Other',
        description: 'A meetup for volunteers to discuss and plan community projects.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '46',
        title: 'Salsa Night',
        date: '2025-07-10',
        location: 'The Late Bar',
        category: 'Entertainment',
        description: 'A night of salsa dancing with live music.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '47',
        title: 'Eco Workshop',
        date: '2025-07-12',
        location: 'House of Wisdom',
        category: 'Other',
        description: 'A workshop on eco-friendly practices and sustainability.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '48',
        title: 'Board Game Night',
        date: '2025-07-15',
        location: 'The Late Bar',
        category: 'Entertainment',
        description: 'A night of board games and fun at a local cafe.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '49',
        title: 'Wine and Paint',
        date: '2025-07-18',
        location: 'House of Wisdom',
        category: 'Art',
        description: 'An event where participants can enjoy wine while painting.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    },
    {
        id: '50',
        title: 'Summer Camp',
        date: '2025-07-20',
        location: 'Central Park',
        category: 'Other',
        description: 'A summer camp with various outdoor activities for kids.',
        images: ['https://fakeimg.pl/600x400?text=Image+1', 'https://fakeimg.pl/600x400?text=Image+2']
    }
] as Event[];