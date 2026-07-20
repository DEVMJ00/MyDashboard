const cards = [

// {
    // title: "Nom technique/interne",
    // label: "Texte affiché sous la carte",
    // text: "Texte dans la carte si pas d'image",
    // icon: "chemin/image.png",
    // url: "https://..."
// }


	{
		title: "Annonce T3 Eybens",
		url: "https://devmj00.github.io/Appart_Eybens/",
		icon: null,
		text: "T3",
		label: "Appart à vendre"
	},

    {
        title: "Google",
        url: "https://www.google.com/",
        icon: "./assets/img/google.png",
		label:"Google"
    },

    {
        title: "Google Maps",
        url: "https://www.google.com/maps",
        icon: "./assets/img/maps.png",
		label:"Google Maps"
    },

    {
        title: "Proton Apps",
        url: "https://account.proton.me/fr/apps",
        icon: "./assets/img/proton.png",
        color: "#EDE8FF",
		label:"Proton Apps"
    },

    {
        title: "Lumo",
        url: "https://lumo.proton.me/u/3/",
        icon: "./assets/img/lumo.png",
		label:"Lumo"
    },

    {
        title: "ChatGPT",
        url: "https://chat.openai.com/chat",
        icon: "./assets/img/chatgpt.png",
        label:"ChatGPT"
		
    },

    {
        title: "Pajemploi",
        url: "https://pajemploi.urssaf.fr/employeur/tableau-de-bord",
        icon: "./assets/img/pajemploi.svg",
		label:"PajEmploi"
    },

    {
        title: "Impôts",
        url: "https://cfspart.impots.gouv.fr/LoginMDP?op=c&url=aHR0cHM6Ly9jZnNwYXJ0LmltcG90cy5nb3V2LmZyL3BvcnRhbC9kZ2kvcHVibGljL3BlcnNvO2pzZXNzaW9uaWQ9SU9EMUlNQVhET0dJSlFGSUVJUUNGRlE/cGFnZUlkPXBuYTJwYXImc2ZpZD0zMA==",
        icon: "./assets/img/impots.png",
		label:"Impôts"
    },

    {
        title: "Crédit Agricole",
        url: "https://www.ca-sudrhonealpes.fr/",
        icon: "./assets/img/ca.webp",
		label:"C.A"
    },

    {
        title: "Caisse d'Epargne",
        url: "https://www.caisse-epargne.fr/languedoc-roussillon/",
        icon: "./assets/img/ce.webp",
		label:"C.E"
    },

    {
        title: "Hotmail",
        url: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
        icon: "https://aadcdn.msftauth.net/shared/1.0/content/images/microsoft_logo_564db913a7fa0ca42727161c6d031bef.svg",
		label:"Hotmail"
    },

    {
        title: "EDF",
        url: "https://espace-client.edf.fr/",
        icon: "./assets/img/edf.png",
		label:"E.D.F"
    },

    {
        title: "Cheats Sheet",
        url: "cheats_sheet.html",
        icon: null,
        text: ">_ :",
		label:"Cheat Sheets"
    },

    {
        title: "Facebook",
        url: "https://www.facebook.com/",
        icon: "./assets/img/fb.svg",
		label:"Facebook"
    },

    {
        title: "Spotnix",
        url: "http://192.168.1.165:8000/accounts/login/",
        icon: null,
        text: "SPOTNIX",
		label:"Spotnix"
    },

    {
        title: "Raspberry Pi Connect",
        url: "https://id.raspberrypi.com/sign-in",
        icon: "./assets/img/raspberry.png",
		label:"Raspberry Pi"
    },

    {
        title: "Freebox OS",
        url: "http://mafreebox.freebox.fr/",
        icon: "./assets/img/freeboxos.png",
		label:"Impôts"
    },

    {
        title: "GitHub",
        url: "https://github.com/login",
        icon: "./assets/img/github.png",
		label:"GitHub"
    },

    {
        title: "GitHub Dév.",
        url: "https://github.com/login",
        icon: "./assets/img/Githubdev.png",
		label:"GitHub Dév."
    },

    {
        title: "Thiings",
        url: "https://www.thiings.co/things",
        icon: "./assets/img/thiings.png",
		label:"Thiings"
    },

    {
        title: "Epic Games",
        url: "https://www.epicgames.com/site/fr/home",
        icon: "./assets/img/epicgames.png",
		label:"Epic Games"
    },

    {
        title: "Steam DB",
        url: "https://steamdb.info/upcoming/free/",
        icon: "./assets/img/steamdb.webp",
		label:"Steam DB"
    },

    {
        title: "G.O.G",
        url: "https://www.gog.com/fr/",
        icon: "./assets/img/gog.webp",
		label:"G.O.G"
    },

    {
        title: "Nintendo",
        url: "https://www.nintendo.fr/Rechercher/Rechercher-299117.html?f=147394-5-81",
        icon: "./assets/img/nintendo.svg",
		label:"Nintendo"
    },

    {
        title: "DTC",
        url: "https://danstonchat.com/latest.html",
        icon: "./assets/img/dtc.webp",
		label:"DTC"
		
    },
	
	 {
        title: "Ulis",
        url: "http://srvuweb-p1//ULISNGE/index.do?clientHostName=%clientname%",
        text: "Ulis",
		label:"ULIS",
        color: "#8FA7C8"
    },

    {
        title: "SDH",
        url: "https://www.sdh.fr/accueil",
        icon: "./assets/img/sdh.png",
		label:"SDH"
    },

    {
        title: "Utiles",
        url: "https://utiles-intranet.actionlogement.fr/jcms/j_6/accueil-action-logement",
        icon: "https://utiles-intranet.actionlogement.fr/plugins/ActionLogementPlugin/images/svg/AL-Logo_Utiles.svg",
        color: "#ffffff",
		label:"Utiles"
    },

    {
        title: "Plateforme Travaux",
        url: "http://globalsdh/intranet/index.php?option=com_user&view=login&return=aHR0cDovL2dsb2JhbHNkaC9pbnRyYW5ldC9pbmRleC5waHA/b3B0aW9uPWNvbV90YWNoZSZ2aWV3PXRhY2hlJkl0ZW1pZD0x",
        icon: "./assets/img/plateforme.png",
        color: "#FFBC01",
		label:"Travaux"
    },

    {
        title: "Sharepoint",
        url: "https://sdh38.sharepoint.com/",
        icon: "./assets/img/sharepoint.png",
		label:"SharePoint"
    },

    {
        title: "e-Temptation",
        url: "https://etemptation.sdh.fr/webquartz/ux/login",
        icon: "./assets/img/etemptation.png",
        color: "#D8EEAB",
		label:"e-Temptation"
    },

    {
        title: "Global",
        url: "https://sdh38.sharepoint.com/:x:/r/sites/contrats/_layouts/15/Doc.aspx?sourcedoc=%7B509EFE42-FEB6-487E-A85F-B5C6C9107D9E%7D&file=GLOBAL.xlsx&action=default&mobileredirect=true",
        text: "Global",
		label:"Global"
    },

    {
        title: "Réserver véhicule",
        url: "https://sdh38.sharepoint.com/sites/resa-auto/SitePages/Home.aspx",
        icon: "./assets/img/voiture sdh.png",
		label:"Résa. véhicules"
    },

    {
        title: "N'Lead",
        url: "https://lead.novamap.fr/Logon.html",
        icon: "./assets/img/nlead.png",
        color: "#ffffff",
		label:"N'Lead"
    },

    {
        title: "Novamap +",
        url: "https://plus.novamap.fr/",
        icon: "./assets/img/novamap.png",
        color: "#ffffff",
		label:"Novamap+"
    },

    {
        title: "BPU",
        url: "https://sdh38.sharepoint.com/sites/coordination/Contrats%20cadres/Forms/AllItems.aspx",
        text: "BPU",
		label:"B.P.U"
    },

    {
        title: "Syndics",
        url: "https://sdh38.sharepoint.com/",
        text: "Syndics"
    },

    {
        title: "Moka Care",
        url: "https://member.moka.care/users/sign_in",
        icon: "https://member.moka.care/assets/moka-care-logo-166x40-65ba8d927c11c971dc412931bf18266c7afb45d88df85abef12a6f43768f564c.svg",
        color: "#ffffff",
		label:"Syndic"
    },

    {
        title: "EPSENS",
        url: "https://www.epsens.com/",
        icon: "https://www.epsens.com/themes/custom/epargne_salariale/img/logo.svg",
		label:"EPSENS"
    },

    {
        title: "BPU Insectes",
        url: "https://sdh38.sharepoint.com/sites/collab/Dossiers%20collaboratifs/",
        icon: "./assets/img/frelon.png",
        color: "#ffffff",
		label:"BPU Insectes"
    },

    {
        title: "Cadastre",
        url: "https://cadastre.data.gouv.fr/",
        icon: "./assets/img/cadastre.png",
		label:"Cadastre"
    },

    {
        title: "Iserba",
        url: "https://extranet.iserba.fr/login",
        icon: "./assets/img/iserba.png"
    },

    {
        title: "FIFA",
        url: "https://sdh38.scorecastbusiness.com/auth/login",
        icon: "./assets/img/football.png",
		label:"Fifa Cup'"
    },

    {
        title: "Melchior",
        url: "https://compte.melchior.pro/",
        icon: "./assets/img/melchior.png",
		label:"Melchior"
    }

];
