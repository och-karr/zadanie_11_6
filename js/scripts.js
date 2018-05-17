//funkcja generujaca losowe id:
function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str; //losowy identyfikator dla kazdej tablicy i karteczki
}

//funkcja konstruujaca klase kolumny - Column
function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

	function createColumn() { // Przy tworzeniu nowej instancji klasy Column tworzony jest też element jQuery

		//tworzenie elementów, z których będzie składała się kolumna:
		// Znak dolara przed nazwą zmiennej dodaje się do zmiennych, ktore trzymają element jQuery.
		var $column = $('<div>').addClass('column'); //element div o klasie column
		var $columnTitle = $('<h2>').addClass('column-title').text(self.name);//dodajemy tytul i wypelniamy tekstem z wlasciwosci name
		var $columnCardList = $('<ul>').addClass('column-card-list');//lista na kartki
		var $columnDelete = $('<button>').addClass('btn-delete').text('x');//przycisk usuwajacy liste
		var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');//przycisk dodajacy karteczke

		//podpinanie odpowiednich zdarzen:
		//usuwanie kolumny za pomoca klikniecia
		$columnDelete.click(function() {
			self.removeColumn();
		});
		//dodanie nowej karteczki i nadanie jej nazwy
		$columnAddCard.click(function() {
			self.addCard(new Card(prompt("Enter the name of the card"))); //new - tworzenie nowego obiektu
		});

		//konstruowanie kolumny i jej zwrocenie:
		$column.append($columnTitle)
		.append($columnDelete)
		.append($columnAddCard)
		.append($columnCardList);
		return $column;
	
    }
  }

Column.prototype = {
	addCard: function(card) {
		this.$element.children('ul').append(card.$element); //podpinamy karte do ul
	},
	removeColumn: function() {
		this.$element.remove(); //usunie kolumne gdy nacisniemy(click) x
	}
};

//funkcja konstruujaca klase Card:
function Card(description) {
	var self = this;

    this.id = randomString();
    this.description = description;
    this.$element = createCard();

    function createCard() {
    	// Implementation of card creation
    }
}


