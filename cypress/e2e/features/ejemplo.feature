Feature: Ejemplo

    Scenario: Ejemplo 1
        Given que un usuario ingresa a la página de "pokemon"
        When presiona "Rechazar todas"
        Then check the name of main buttons
            | Inicio | Pokédex | Aplicaciones | Juego de Cartas Coleccionables | Dibujos animados | Eventos de Play! Pokémon | Noticias |

    Scenario: Desafio 2
        Given que un usuario ingresa a la página de "pokemon"
        When presiona "Pokédex"
        And completa el campo de búsqueda pokemon con "93"
        And presiona el botón de la lupa
        And presiona "Cargar más Pokémon"
        Then se comprueba que todos los números de pokemon contienen "93"

    #Ir a la página de noticias y comprobar que cada noticia tiene una imagen, fecha, una categoría o tag, un título y una descripción
    Scenario: Desafio 3
        Given que un usuario ingresa a la página de "pokemon"
        When presiona "Noticias"
        Then se comprueba que la noticia contenga una imagen, fecha, tag, título y descripción