/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
let allItems = [
  {"id": 1,"name": "Apples","image": "images/items/apples.png"},
  {"id": 2,"name": "Baby Sofy","image": "images/items/baby-soft.png"},
  {"id": 3,"name": "Batteries","image": "images/items/batteries.png"},
  {"id": 4,"name": "Bovril","image": "images/items/bovril.png"},
  {"id": 5,"name": "Bread Bag","image": "images/items/bread-bag.png"},
  {"id": 6,"name": "Butter","image": "images/items/butter.png"},
  {"id": 7,"name": "Chicken","image": "images/items/chicken.png"},
  {"id": 8,"name": "Chocolate","image": "images/items/chocolate.png"},
  {"id": 9,"name": "Cobra","image": "images/items/cobra.png"},
  {"id": 10,"name": "Cream Dove","image": "images/items/cream-dove.png"},
  {"id": 11,"name": "Deodorant","image": "images/items/deodorant.png"},
  {"id": 12,"name": "Dish Washer","image": "images/items/dish-washer.png"},
  {"id": 13,"name": "Duck Cleaner","image": "images/items/duck-cleaner.png"},
  {"id": 14,"name": "Eggs","image": "images/items/Eggs.png"},
  {"id": 15,"name": "Flour","image": "images/items/flour.png"},
  {"id": 16,"name": "Hand Washer","image": "images/items/hand-washer.png"},
  {"id": 17,"name": "Handy Andy Lemon","image": "images/items/handy-andy-lemon.png"},
  {"id": 18,"name": "Handy Andy Lavendar","image": "images/items/handy-andy-lavendar.png"},
  {"id": 19,"name": "Ice Cream","image": "images/items/ice-cream.png"},
  {"id": 20,"name": "Jungle Oats","image": "images/items/jungle-oats.png"},
  {"id": 21,"name": "Lasagne","image": "images/items/lasagne.png"},
  {"id": 22,"name": "Light Bulb","image": "images/items/light-bulb.png"},
  {"id": 23,"name": "Maize Meal","image": "images/items/maize-meal.png"},
  {"id": 24,"name": "Marsh Mellows","image": "images/items/marsh-mallows.png"},
  {"id": 25,"name": "Matches","image": "images/items/matches.png"},
  {"id": 26,"name": "Mayonnaise","image": "images/items/mayonnaise.png"},
  {"id": 27,"name": "Milk","image": "images/items/milk.png"},
  {"id": 28,"name": "Mince","image": "images/items/mince.png"},
  {"id": 29,"name": "Nik Naks","image": "images/items/nik-naks.png"},
  {"id": 30,"name": "Olives","image": "images/items/olives.png"},
  {"id": 31,"name": "Pegs","image": "images/items/pegs.png"},
  {"id": 32,"name": "Pop Corn","image": "images/items/pop-corn.png"},
  {"id": 33,"name": "Pronutro","image": "images/items/pronutro.png"},
  {"id": 34,"name": "Raisins","image": "images/items/raisins.png"},
  {"id": 35,"name": "Shampoo Head and Shoulders","image": "images/items/shampoo-head-n-shoulders.png"},
  {"id": 36,"name": "Shampoo","image": "images/items/shampoo.png"},
  {"id": 37,"name": "Shoe Polish","image": "images/items/shoe-polish.png"},
  {"id": 38,"name": "Soda","image": "images/items/soda.png"},
  {"id": 39,"name": "Spontex","image": "images/items/spontex.png"},
  {"id": 40,"name": "Tomato Sauce","image": "images/items/tomato-sauce.png"},
  {"id": 41,"name": "Grapes","image": "images/items/grapes.png"},
  {"id": 42,"name": "Tooth Paste Colgate Max","image": "images/items/tooth-paste-colgate-max.png"},
  {"id": 43,"name": "Tooth Paste","image": "images/items/tooth-paste.png"},
  {"id": 44,"name": "Vinegar","image": "images/items/vinegar.png"},
  {"id": 45,"name": "Yoghurt","image": "images/items/yoghurt.png"},
  {"id": 46,"name": "Sponge","image": "images/items/sponge.png"}
];

let subjectItems;
let friendsItems;
let strangersItems;
let userItems;
let foilItems;
let allTheItems;
let selectedItem;

let displayFriendAndStrangerItems = true;

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const onload = (event) => {
  // populate the shopping trollies
  allItems = shuffle(allItems);
  
  const numItems = Math.round(allItems.length/4);
  subjectItems = allItems.slice(0, numItems);
  friendsItems = allItems.slice(numItems, numItems*2);
  strangersItems = allItems.slice(2*numItems, 3*numItems);
  foilItems = allItems.slice(3*numItems, 4*numItems);
  userItems = subjectItems
    .concat(friendsItems)
    .concat(strangersItems);
  userItems = shuffle(userItems);
  allTheItems = subjectItems
  .concat(friendsItems)
  .concat(strangersItems)
  .concat(foilItems);
  allTheItems = shuffle(allTheItems);

  subjectItems.forEach(element => {
    const node = document.createElement("div");
    const imageNode = document.createElement('img');
    imageNode.setAttribute('src', element.image);
    imageNode.setAttribute('alt', element.name)
    imageNode.classList.add('thumb');
    node.appendChild(imageNode);
    node.classList.add('drag-over', 'fluid', 'space-out');
    node.setAttribute('id', `subject-item-${element.id}`);
    document.getElementById("subject-items").appendChild(node);
  });
  if (displayFriendAndStrangerItems) {
    friendsItems.forEach(element => {
      const node = document.createElement("div");
      const imageNode = document.createElement('img');
      imageNode.setAttribute('src', element.image);
      imageNode.setAttribute('alt', element.name)
      imageNode.classList.add('thumb');
      node.appendChild(imageNode);
      node.classList.add('drag-over', 'fluid', 'space-out');
      node.setAttribute('id', `friend-item-${element.id}`);
      document.getElementById("friends-items").appendChild(node);
    });
    strangersItems.forEach(element => {
      const node = document.createElement("div");
      const imageNode = document.createElement('img');
      imageNode.setAttribute('src', element.image);
      imageNode.setAttribute('alt', element.name)
      imageNode.classList.add('thumb');
      node.appendChild(imageNode);
      node.classList.add('drag-over', 'fluid', 'space-out');
      node.setAttribute('id', `stranger-item-${element.id}`);
      document.getElementById("strangers-items").appendChild(node);
    });
  }

  $('#mooodal').modal({ backdrop: 'static', keyboard: false });
  $('#modalBody').html($('#welcome').html());
  $('#modalTitle').html('Welcome to Memory Test');
  $('#mooodal').modal('show');
}

const validateTrolley = () => {
  if (userItems.length) {
    selectedItem = userItems.pop();
    
    document.getElementById('no').removeAttribute('disabled');
    document.getElementById('yes').removeAttribute('disabled');
    $('#question').html(`Was the item '${selectedItem.name}' in your trolly?`);

    const node = document.createElement("div");
    const imageNode = document.createElement('img');
    imageNode.setAttribute('src', selectedItem.image);
    imageNode.setAttribute('alt', selectedItem.name)
    imageNode.classList.add('thumb-large');
    node.appendChild(imageNode);
    node.classList.add('fluid', 'space-out');
    $("#question-content").html(node);
  } else {
    alert('Great!!!!! You have gone through all the items in your trolley!');
    $('#modalTitle').html('Done with the first phase!');
    $('#modalBody').html('Done with the first phase!');
    $('#mooodal').modal('show');
  }
};

const phase2 = () => {
  if(allTheItems.length) {
    selectedItem = allTheItems.pop();
    $('#screen-2-quest').hide();
    document.getElementById('screen-2-no').removeAttribute('disabled');
    document.getElementById('screen-2-yes').removeAttribute('disabled');
    $('#screen-2-img').attr('src', `${selectedItem.image}`);
    $('#screen-2-title').html(`Was this item '${selectedItem.name}' present in the task?`);
    $('#screen-2').modal({ backdrop: 'static', keyboard: false });
    $('#screen-2').modal('show');
  } else {
    alert('We are done here!!! Thank you for participating')
  }
};

const phase2b = () => {
  $('#screen-2-title').html(`Who put the item '${selectedItem.name}' in their boot?`);
  $('#screen-2-quest').show();
  document.getElementById('screen-2-no').setAttribute('disabled', true);
  document.getElementById('screen-2-yes').setAttribute('disabled', true);
};

$("#mooodal").on('hide.bs.modal', () => {
  allTheItems = subjectItems
    .concat(friendsItems)
    .concat(strangersItems)
    .concat(foilItems);
  allTheItems = shuffle(allTheItems);

  if (userItems.length) {
    validateTrolley();
  } else {
    phase2();
  }
});

$('#subjectPutItemInBoot').on('click', (event) => {
  event.preventDefault(); // To prevent following the link (optional)
  const item = subjectItems.find(subjectItem => subjectItem.id === selectedItem.id);
  if (!item) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>FALSE');
  } else {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>True');
  }
  phase2();
});
$('#friendPutItemInBoot').on('click', (event) => {
  event.preventDefault(); // To prevent following the link (optional)
  const item = friendsItems.find(friendsItem => friendsItem.id === selectedItem.id);
  if (!item) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>FALSE');
  } else {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>True');
  }
  phase2();
});
$('#strangerPutItemInBoot').on('click', (event) => {
  event.preventDefault(); // To prevent following the link (optional)
  const item = strangersItems.find(strangersItem => strangersItem.id === selectedItem.id);
  if (!item) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>FALSE');
  } else {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>True');
  }
  phase2();
});

$('#screen-2-no').on('click', (event) => {
  event.preventDefault();
  
  let taskItems = subjectItems
    .concat(friendsItems)
    .concat(strangersItems);
  taskItems = shuffle(taskItems);

  const item = taskItems.find(taskItem => taskItem.id === selectedItem.id);
  if (item) {
    console.log('>>>>>>>>>>>>>>>>>>>>>FALSE');
    phase2b();
  } else {
    console.log('>>>>>>>>>>>>>>>>>>>>>>True');
    phase2();
  }
});

$('#screen-2-yes').on('click', (event) => {
  event.preventDefault();
  
  let taskItems = subjectItems
    .concat(friendsItems)
    .concat(strangersItems);
  taskItems = shuffle(taskItems);

  const item = taskItems.find(taskItem => taskItem.id === selectedItem.id);
  if (item) {
    console.log('>>>>>>>>>>>>>>>>>>>>>True');
    phase2b();
  } else {
    console.log('>>>>>>>>>>>>>>>>>>>>>>FALSE');
    phase2();
  }
});

$('#no').on('click', (event) => {
  event.preventDefault(); // To prevent following the link (optional)

  let item = subjectItems.find(subjectItem => subjectItem.id === selectedItem.id);
  if (item) {
    $('#question').html(`Are you sure? Think again! Was the item '${item.name}' was in your trolley?`);
  } else {
    item = friendsItems.find(friendItem => friendItem.id === selectedItem.id);
    if (item) {
      document.getElementById(`friend-item-${item.id}`).classList.add('highlight');
    // Animate into the friend's boot
      $(`#friend-item-${selectedItem.id}`).remove();
    }

    item = strangersItems.find(strangerItem => strangerItem.id === selectedItem.id);
    if (item) {
      document.getElementById(`stranger-item-${item.id}`).classList.add('highlight');
    // Animate into the friend's boot
      $(`#stranger-item-${selectedItem.id}`).remove();
    }
    validateTrolley();
  }
});

$('#yes').on('click', (event) => {
  event.preventDefault();

  const item = subjectItems.find(subjectItem => subjectItem.id === selectedItem.id);
  if (item) {
    document.getElementById('no').setAttribute('disabled', true);
    document.getElementById('yes').setAttribute('disabled', true);
    document.getElementById(`subject-item-${item.id}`).classList.add('drag-drop', 'highlight');
    $('#question').html(`Correct!!! Drag the item '${item.name}' from your trolley into your car boot!`);
  } else {
    $('#question').html(`Are you sure? Think again! Was the item in your trolley?`);
  }
});

const dragMoveListener = (event) => {
  const target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  
  // translate the element
  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  
  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '.drag-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.5,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target;
    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    //draggableElement.textContent = 'Dragged in'
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    //event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    //event.relatedTarget.textContent = 'Dropped';
    $(`#subject-item-${selectedItem.id}`).remove();
    validateTrolley();
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})

interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        //restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })

// target elements with the "draggable" class
interact('.draggable')
.draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true
    })
  ],
  // enable autoScroll
  autoScroll: true,

  listeners: {
    // call this function on every dragmove event
    move: dragMoveListener,

    // call this function on every dragend event
    end (event) {
      var textEl = event.target.querySelector('p')

      textEl && (textEl.textContent =
        'moved a distance of ' +
        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                   Math.pow(event.pageY - event.y0, 2) | 0))
          .toFixed(2) + 'px')
    }
  }
})

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;
window.addEventListener("load", onload);