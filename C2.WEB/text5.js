
function jogo() {


    var cores = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
    "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral",
    "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey",
    "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon",
    "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink",
    "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink",
    "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue",
    "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink",
    "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue",
    "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
    "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip",
    "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue",
    "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue",
    "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
    "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

    var vetColors = []; 
    var randonColors
    
    for (let i = 0; i < 10; i++) {
        randonColors = Math.floor((Math.random() * cores.length) + 1);
        vetColors.push(cores[randonColors]);
    }
    vetColors.sort(); 
    
    
    randonColors = Math.floor((Math.random() * (vetColors.length)) + 1);
    var resultado = vetColors[randonColors]
    
    var life = 5
    var corEscolhida
    
    
    while (life != 1) {
        corEscolhida = prompt("Estou pensando em uma dessas cores\n" + vetColors.join(", ") + "\nDescubra qual é:\n" + "Vida Restantes " + life)
        if (corEscolhida == resultado) {
            alert("CORRETO!, Você venceu")
            document.body.style.background = corEscolhida
            life = 1;
        }
        else if (corEscolhida == "") {
            alert("Por favor preencha o campo e tente novamente!")
        } else if (resultado != corEscolhida) {
            if (resultado > corEscolhida) {
                alert("ERROUUU!\n\nSua cor é alfabeticamente menor que a que eu escolhi.")
                life--
            } else if (resultado < corEscolhida) {
                alert("ERROUUU!\n\nSua cor é alfabeticamente maior que a que eu escolhi.")
                life--
            }
        }
    
    }
    if (corEscolhida != resultado) {
        alert("Game Over!")
    } else {
        alert("Obrigado por jogar!")
    }
}