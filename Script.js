var ButtonNumber;
       var Counter;

       var ConstButtonNumber = 16;
       var AptVar = "EDDx";
       var MenuVar = "Home";

       //Names for Windows and Concatinations
       var Name = "Name";
       var Link = "Link";
       var ContBtnName = "ContentBtn";


       var EDDxGndName = [""];
       var EDDxGndLink = [""];
       var EDDxSidName = [""];
       var EDDxSidLink = [""];
       var EDDxStarName = [""];
       var EDDxStarLink = [""];
       var EDDxIacName = [""];
       var EDDxIacLink = [""];


       var EDDBGndName = ["Ground", "Apron"];
       var EDDBGndLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=3E0290E0846AF46137C31B987C488E56&title=AD%202%20EDDB%202-9", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=7E6567C349D0ACCA4FCDB9F18598C4C1&title=AD%202%20EDDB%202-7"]; 
       var EDDBSidName = ["Rwy 07L", "Rwy 07L West Side", "Rwy 07R", "Rwy 07R West Side", "Rwy 25L", "Rwy 25L West Side", "Rwy 25R", "Rwy 25R West Side"];
       var EDDBSidLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=63A730411B8BDFA02D682B2E95EB5C2A&title=AD%202%20EDDB%205-7-6", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=1B72B0E227189023C6E5E1D81CACE102&title=AD%202%20EDDB%205-7-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=619ABB67F3E3F63057798FBA8155F6FC&title=AD%202%20EDDB%205-7-14", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=0FF8A7541A2C5119F421F96BAF41F46D&title=AD%202%20EDDB%205-7-15","https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=AF562855F8926A73D9A1E2A92DAC9B8E&title=AD%202%20EDDB%205-7-20", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=41D4D3CFC4E45D0BF220B0F150E751FA&title=AD%202%20EDDB%205-7-21", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=08E28D0A7678B7208898E86F89D35E69&title=AD%202%20EDDB%205-7-27", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=E0ED856B6BCC46BB39D0BDB32AEAE5ED&title=AD%202%20EDDB%205-7-28"];
       var EDDBStarName = ["Rwy 07", "Rwy 25"];
       var EDDBStarLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=08AC166169A3ABA272A127475EB48953&title=AD%202%20EDDB%203-1-1", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=C5EF680E1A621730C684EC83E9A561CB&title=AD%202%20EDDB%203-1-2"];
       var EDDBIacName = ["ILS 07L", "ILS 07R", "ILS 25L", "ILS 25R"];
       var EDDBIacLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=0CFEEE1DB26491CB140BF8E80BACBD85&title=AD%202%20EDDB%204-2-1", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=914AA4A14CB5116AF65F1DE55AFEEA94&title=AD%202%20EDDB%204-2-2", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=359F9926BFBFAD20F99CFF89F9353E82&title=AD%202%20EDDB%204-2-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=E2A2D6C4D7DBF6EB5AA927BBB9CB7D8E&title=AD%202%20EDDB%204-2-4"];

       var EDDFGndName = ["Ground", "Apron"];
       var EDDFGndLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=EDB26768B50B3B97ECD08A424D1D5E31&title=AD%202%20EDDF%202-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=3BA075DBA53D1A7B61AB7A3C961707D1&title=AD%202%20EDDF%202-7"]
       
       var EDDFSidName = ["Will be added soon"];
       var EDDFSidLink = [""];
       
       var EDDFStarName = ["Rwy 07 Unoko, Rolis (3-1-7)", "Rwy 07 Kerax, Spesa (3-1-8)", "Rwy 07 Empax (3-1-13)", "Rwy 07 Petix (3-1-17)", "Rwy 07 Fawur (3-1-21)", "Rwy 25 Unoku, Rolis (3-1-1)", "Rwy 25 Kerax, Spesa (3-1-2)", "Rwy 25 Empax (3-1-15)", "Rwy 25 Petix (3-1-19)", "Rwy 25 Fawur (3-1-32)", "STAR 1 (3-1-25)", "STAR 2 (3-1-26)", "STAR 3 (3-1-29)", "STAR 4 (3-1-30)"];
       var EDDFStarLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=0C104C088ADA70A91079CB453BCA913D&title=AD%202%20EDDF%203-1-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=30FDC4094050D45F5BAD36A97A24A74A&title=AD%202%20EDDF%203-1-8", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=2357A5248D4D786AFBAD7762EDD62D3E&title=AD%202%20EDDF%203-1-13", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=30CE1CD35F644EB569ADF27DC4388BDE&title=AD%202%20EDDF%203-1-17", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=2A189E532201A5CA944FE9C257C9C125&title=AD%202%20EDDF%203-1-21", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=5C10FABDD5DC37730B86D059FF710CD7&title=AD%202%20EDDF%203-1-1", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=1190157E988CC834C06FAEC0FB6BE853&title=AD%202%20EDDF%203-1-2", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=8C4608FA3CE0E32850D60F12C28ABC24&title=AD%202%20EDDF%203-1-15", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=9FDBAB5648A8D79DA1AEB9228F341622&title=AD%202%20EDDF%203-1-19", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=1F70659E3F22C8550598CBE4F606A3D3&title=AD%202%20EDDF%203-1-23", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=CFB4A339375D4989C25FF469D44D5E87&title=AD%202%20EDDF%203-1-25", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=071F1B43E5936B65263E6FDEB313246D&title=AD%202%20EDDF%203-1-26", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=FB9C082F24D90029EC0F89DABD4C3A1D&title=AD%202%20EDDF%203-1-29", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=FBE1DC4EB16A3092F6245FF48F13B8DE&title=AD%202%20EDDF%203-1-30"];
       var EDDFIacName = ["Rwy 07L", "Rwy 07C", "Rwy 07R", "Rwy 25L", "Rwy 25C", "Rwy 25R"];
       var EDDFIacLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=4C231029B898AEF22330093C9BAFF59C&title=AD%202%20EDDF%204-2-1", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=18D32DBF01624ABE7862A7EAB206AB96&title=AD%202%20EDDF%204-2-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=71570123BBF79278FB533B9C9305DE1D&title=AD%202%20EDDF%204-2-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=C41F041CEEEABC06FF35B33B8188BD20&title=AD%202%20EDDF%204-2-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=5E10E301A64F6BD6330B93A40C6E43E5&title=AD%202%20EDDF%204-2-9", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=A3DB17399EAA4E292D11526790B02540&title=AD%202%20EDDF%204-2-11"];

       var EDDHGndName = ["Ground", "Apron"];
       var EDDHGndLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=6312A737DDE43ACF00C8B503E18A5190&title=AD%202%20EDDH%202-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=6C472B24B45F64E5E148D4CCAC4CB810&title=AD%202%20EDDH%202-7"];
       var EDDHSidName = ["Ham VOR", "Rwy 05", "Rwy 15", "Rwy 23", "Rwy 33"];
       var EDDHSidLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=4BA718395477905649976DB420439DD5&title=AD%202%20EDDH%205-7-2", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=D827A9B4DADB2FCD0DF71D32B68049EA&title=AD%202%20EDDH%205-7-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=9D66BE7DBD42DC6982F9B6A3F54FFF19&title=AD%202%20EDDH%205-7-6", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=C06B5C8B45B818A8F8D2FDA17B7BF06B&title=AD%202%20EDDH%205-7-9", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=600163C2E6669384CFF3CC7326045D27&title=AD%202%20EDDH%205-7-12"];
       var EDDHStarName = ["Rwy 05", "Rwy 15", "Rwy 23", "Rwy 33"];
       var EDDHStarLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=E9C9540C0CFD2302C08971A0D51EBD27&title=AD%202%20EDDH%203-1-1", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=A249D55C896534E877D6F35308F9DABF&title=AD%202%20EDDH%203-1-4", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=3172F85AA997CB128ADD5763F434CC52&title=AD%202%20EDDH%203-1-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=1021D9AFE4B8AD901FC7C1BBF3808F5F&title=AD%202%20EDDH%203-1-10"];
       var EDDHIacName = ["ILS 05", "ILS 15", "ILS 23", "ILS 33"];
       var EDDHIacLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=DEF9F58241DE42559DD7BD32FF6EC6A1&title=AD%202%20EDDH%204-2-1", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=855236D21D449EB0BBDD5D2C915CF8F7&title=AD%202%20EDDH%204-2-2", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=056D00BEC4ABF4796015E3D53A3737CB&title=AD%202%20EDDH%204-2-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=CB7A9527690996B6C83EAF890478C5C4&title=AD%202%20EDDH%204-2-4"];

       var EDDLGndName = ["Ground", "Apron"];
       var EDDLGndLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=696FA61359919B5353440E60B3687D34&title=AD%202%20EDDL%202-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=D116C120A9CA50029E0F271E787C62B6&title=AD%202%20EDDL%202-9"];
       var EDDLSidName = ["Rwy 23L", "Rwy 23R", "Rwy 05R", "Rwy 05L"];
       var EDDLSidLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=0FB0FA5940BE222A81105F87C3553FD2&title=AD%202%20EDDL%205-7-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=3F7D84DB7CA2C7D9C217116F493E4024&title=AD%202%20EDDL%205-7-90", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=F6EF670B4F9CC228EE6F2822E871E5C7&title=AD%202%20EDDL%205-7-13", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=0CCD8A86D3F85F3D9ADD15249FFB5838&title=AD%202%20EDDL%205-7-17"];
       var EDDLStarName = ["Rwy 05 Star", "Rwy 05 Rnav", "Rwy 05 Transition", "Rwy 23 Star", "Rwy 23 Rnav", "Rwy 23 Transition"];
       var EDDLStarLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=FBE409CD84AF1FBAA10B457FDCCDFCC0&title=AD%202%20EDDL%203-1-2", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=B9AF8BB70C7903896ACA2A7A33DFF866&title=AD%202%20EDDL%203-1-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=A3D1ED277C4CA7774FA6E91DD6A20CF5&title=AD%202%20EDDL%203-1-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=9A887E295C0B4019191553F8771DB9E0&title=AD%202%20EDDL%203-1-4", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=4CF0F1A49728D4DD5D063F9E1C1F43C1&title=AD%202%20EDDL%203-1-6", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=525F3786A0318D8A47501F4A72CEA7DA&title=AD%202%20EDDL%203-1-8"];
       var EDDLIacName = ["ILS 05L", "ILS 05R", "ILS 23L", "ILS 23R"];
       var EDDLIacLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=87206F6B7611D39872AAA5AF46B620BD&title=AD%202%20EDDL%204-2-4", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=DA7003E46A4FE8C494892965CEC1DA4B&title=AD%202%20EDDL%204-2-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=16DED499B3E6DBB94E19CCB4F8B9F5CF&title=AD%202%20EDDL%204-2-1", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=03418059030E938B4B4F3C4DC414F779&title=AD%202%20EDDL%204-2-2"];

       var EDDMGndName = ["Ground", "Apron"];
       var EDDMGndLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=D5716E447257ED3420952E083937DE0F&title=AD%202%20EDDM%202-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=DC0D129334E06590E4D65C5CB247BDB7&title=AD%202%20EDDM%202-9"];
       var EDDMSidName = ["Rwy 08L Givmi, Ridar", "Rwy 08L Bibag, Kirdi, Rotax, Vavor, Turbu, ulsi, Mersi, Dabaxa, Olaso, Alg", "Rwy 08L Inpud, Eviva, Anker", "Rwy 08L Akini", "Rwy 08R Ridar, Givmi", "Rwy 08R Bibag, Kirdi, Rotax, Vavor, Valor, Turbo, TUlsi, Mersi, Obaka, Alg, Olaso", "Rwy 08R Inpud, Eviva, Anker", "Rwy 08R Akini", "Rwy 26L Ridar, Givmi, Mike", "Rwy 26L Bibag, Kirdi, Rotax, Vavor, Turbu, Tulsi, Obaxa, Mersi, Alg, Olaso", "Rwy 26L Inpud, Eviva, Anker", "Rwy 26L Akini", "Rwy 26R Ridar, Givmi, MIQ", "Rwy 26R Bibag, Kirdi, Rotax, Vavor, Turbu, Tulsi, Obaxa, Mersi, Amexo, Olaso", "Rwy 26R Inpud, Eviva, Anker", "Rwy 26R Akini"];
       var EDDMSidLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=43373E99CE5371A990C41C711E778B58&title=AD%202%20EDDM%205-7-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=B5DA81A84C924226D2050DEC4C2D9B4E&title=AD%202%20EDDM%205-7-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=C067212F75B9FFCFACD3C5A2F3B2C307&title=AD%202%20EDDM%205-7-9", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=E842C5FE16240B90C5AF3EB289EF640D&title=AD%202%20EDDM%205-7-11", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=AD6D1FF07E4388BA943F25D2B9C86807&title=AD%202%20EDDM%205-7-17", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=AACFEEB3ED48B07046E0A18E9F894FD1&title=AD%202%20EDDM%205-7-19", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=77308596FA2903EA8DC86B704E830CAF&title=AD%202%20EDDM%205-7-21", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=96E979EE2E2F6EFBEFAB349A46DAD9BD&title=AD%202%20EDDM%205-7-23", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=DB6648CF2D0D336F6792D19D77F9B39B&title=AD%202%20EDDM%205-7-29", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=BB7B9286D4998AEDCA6D61ECFFD28237&title=AD%202%20EDDM%205-7-310", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=987E3260AAE0C4FB9553D441B388EA6A&title=AD%202%20EDDM%205-7-33", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=A792D32D03DB958F75AF9EED6D582400&title=AD%202%20EDDM%205-7-35", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=0715D1EE4B85A6FD7D1F458B7EA83F28&title=AD%202%20EDDM%205-7-41","https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=29DAAE6C072CD8093B084FC3FCAA9955&title=AD%202%20EDDM%205-7-43","https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=029D7FCBD4375C4991D8DA8DD029EDBB&title=AD%202%20EDDM%205-7-45","https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=CCF38DB611460EEA9BAA2838603900F8&title=AD%202%20EDDM%205-7-47"];
       var EDDMStarName = ["Star NW Pelog, Kunod, Geslu, Abgas, Rixed, Anora, Akanu", "Star NE Exusi, Bagmi, Arbax, Bamta", "Star SW Mersi, Osder, Irbir, Obaga, Kogol", "Star SE Napsa", "Rwy 08 Rokil, Landu (3-1-8)", "Rwy 08 Betos, Napsa (3-1-9)", "Rwy 08 Lular, Vesub, Nirgo (3-1-12) (1/2)", "Rwy 08 Lular, Vesub, Nirgo (3-1-13) (2/2)", "Rwy 08 Bagsi, Vatet, Rasta (3-1-16) (1/2)", "Rwy 08 Bagsi, Vatet, Rasta (3-1-17) (2/2)", "Rwy 26 Rokil, Landu (3-1-10)", "Rwy 26 Betso, Napsa (3-1-11)", "Rwy 26 Elmox, Levbu (3-1-14) (1/2)", "Rwy 26 Elmox, Levbu (3-1-14) (2/2)"];
       var EDDMStarLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=D52DBC0FE20B4C239725DE8AAE817EF8&title=AD%202%20EDDM%203-1-4", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=B47880B78E1F956ED5D01B1AA9617910&title=AD%202%20EDDM%203-1-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=48C9DB4A7CAA51BDE66FF60E52695D89&title=AD%202%20EDDM%203-1-6", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=68615BB365956B2073B2E4D8708ED419&title=AD%202%20EDDM%203-1-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=47CBB5619E718822B9E74BA4A7E2EFF8&title=AD%202%20EDDM%203-1-8", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=A3A9576BA8CA59ABCA620992CABA7FE2&title=AD%202%20EDDM%203-1-9", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=372BF16085B693740724E0D4E1ED9652&title=AD%202%20EDDM%203-1-12", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=8929B80C47448C641BB9C5841564342A&title=AD%202%20EDDM%203-1-13", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=B5918C5750AB6F3C9390A3E96634066A&title=AD%202%20EDDM%203-1-16", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=0E76D16A7DD90C4CDA79AA0CF24E5BB9&title=AD%202%20EDDM%203-1-17", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=5652BB10014996C6D78C1AFE5813A83C&title=AD%202%20EDDM%203-1-10", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=B2538C8AA5DC0B2BDBD19F7293F38AD5&title=AD%202%20EDDM%203-1-11", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=47FA177BF647A21B6849F19AD95F0647&title=AD%202%20EDDM%203-1-14", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=79CADAA9A18EC00F5DA2E4C303570581&title=AD%202%20EDDM%203-1-15"];
       var EDDMIacName = ["ILS 08L", "ILS 08R", "ILS 26L", "ILS 26R"];
       var EDDMIacLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=873763B4FD688C3DCFB9801BEA147BB5&title=AD%202%20EDDM%204-2-1", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=601B01BCE99100B7E47F1569DE9C2A72&title=AD%202%20EDDM%204-2-2", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=964F1FA23096BB11B809E0D2FF945917&title=AD%202%20EDDM%204-2-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=954C756552E949E4C3E2149006356DDC&title=AD%202%20EDDM%204-2-4"];

       var EDDNGndName = ["Ground", "Apron"];
       var EDDNGndLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=534bd48ab5a4624c93f010b30b9d34fe&title=AD%202%20EDDN%202-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=986961fdb5d4a2f1b050031ff4f9a184&title=AD%202%20EDDN%202-7"];
       var EDDNSidName = ["Rwy 10", "Rwy 28"];
       var EDDNSidLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=C0BD5F875E9A4D52678C9EFB0D51CB2B&title=AD%202%20EDDN%205-7-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=F6E60E140DACB65E9108EAC57F1DF832&title=AD%202%20EDDN%205-7-5"];
       var EDDNStarName = ["STAR", "Rnav Rwy 10 Dodas, Pivir, Letku, Dosis", "Rnav Rwy 10 Bisbu, Subag", "Rnav Rwy 28 Dodas, Pivir, Letku, Dosis", "Rnav Rwy 28 Nepeg, ERL, Subag, Unkul"];
       var EDDNStarLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=3C876FB7DEB4322DCF18F286661A6CF1&title=AD%202%20EDDN%203-1-2", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=6345ba252255ffac176d91ae7578ed95&title=AD%202%20EDDN%203-1-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=2d3ed71702e856943482b28500b41f52&title=AD%202%20EDDN%203-1-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=3ff906f4146c4b59e4d5dd2a5eabe2b5&title=AD%202%20EDDN%203-1-4", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=c19ab40fd65ae28ed708638a3d536ec4&title=AD%202%20EDDN%203-1-6"];
       var EDDNIacName = ["ILS 10", "ILS 28"];
       var EDDNIacLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=5F30CBA6FFFF578C746BA3A879D56270&title=AD%202%20EDDN%20%204-2-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=A6CBACD3CC3F65C31A0282FD54A3C142&title=AD%202%20EDDN%204-2-1"];

       var EDDSGndName = ["Ground", "Apron"];
       var EDDSGndLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=7954BF36059936BD92F33735DC702705&title=AD%202%20EDDS%202-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=20C90CCD19B785AC7CAA4FB292CCA54F&title=AD%202%20EDDS%202-7"];
       var EDDSSidName = ["Rwy 07", "Rwy 25"];
       var EDDSSidLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=E573E0744439219F961AB09D8930A01A&title=AD%202%20EDDS%205-7-7", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=67E5FE4B7A334511F8D5F762DCAC77FA&title=AD%202%20EDDS%205-7-3"];
       var EDDSStarName = ["Star Rwy 07/25", "Rnav Rwy 07", "Rnav Rwy 07 CDO", "Rnav Rwy 25", "Rnav Rwy 25 CDO"];
       var EDDSStarLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=89976781E0F24B5940CB570E7F486936&title=AD%202%20EDDS%203-1-2", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=33469952090B3F77F504A193B6DEE7BC&title=AD%202%20EDDS%203-1-3", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=D8A61CE756E56ECF0C716160904E017A&title=AD%202%20EDDS%203-1-5", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=1F998A1C3BEB157CFDCD4D85EEF3023C&title=AD%202%20EDDS%203-1-4", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=9E754F9223FDFDCD018CF64DEADC8D9E&title=AD%202%20EDDS%203-1-6"];
       var EDDSIacName = ["ILS 07", "ILS 25"];
       var EDDSIacLink = ["https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=04377C98D0625C2C45912C9FD7EA6447&title=AD%202%20EDDS%204-2-2", "https://aip.dfs.de/basicIFR/scripts/getPage.php?part=AD&id=28DF04F844FFAD2D1AF79B6A16C2F668&title=AD%202%20EDDS%204-2-1"];


        function setVariable(Btn) {
            //Set Airport Button            
            if ((Btn === Btn.toUpperCase()) == true) {
                AptVar = Btn;
            }
            else {
                MenuVar = Btn;
            }

            doTheMagic()
        }


        function doTheMagic() {
 if (MenuVar == "Home") {
document.getElementById("home").style.display="flex";
}
else {

document.getElementById("home").style.display="none";

}
            
            //Set Heading and Selected Airport Lables
            document.getElementById("heading").innerHTML = MenuVar;
            document.getElementById("AptBtn").innerHTML = "APT: " + AptVar;

            //set Sidenav Color
            document.getElementById("Home").style.color = "white";
            document.getElementById("Gnd").style.color = "white";
            document.getElementById("Sid").style.color = "white";
            document.getElementById("Star").style.color = "white";
            document.getElementById("Iac").style.color = "white";

            document.getElementById(MenuVar).style.color = "green";

            //Sets number of Buttons, that should be visible
            if (MenuVar != "Home"){
                ButtonNumber = Object.keys(window[AptVar+MenuVar+Name]).length;
            }
            else {
                ButtonNumber = 0;
            }

                // Set Button Visibility
                counter = 0;
                while (counter < ConstButtonNumber) {
                    if (counter < ButtonNumber) {
                        document.getElementById(ContBtnName.concat(counter)).style.display = "block";
                    }
                    else {
                        document.getElementById(ContBtnName.concat(counter)).style.display = "none";
                    }
                counter = counter + 1;
                }
        


        // Sets the Buttons Labels
        counter = 0;
        while (counter < ConstButtonNumber) {
            document.getElementById(ContBtnName.concat(counter)).innerHTML = AptVar + " | " + window[AptVar+MenuVar+Name][counter];
            counter = counter + 1;
        }

        // Sets the Buttons Link
        counter = 0;
        while (counter < ConstButtonNumber) {
            document.getElementById(ContBtnName.concat(counter)).href = window[AptVar+MenuVar+Link][counter];
            counter = counter + 1;
        }
        }


        function Login() {
            //Username = prompt("Please enter Username:");
            LocalPassword = prompt("Please enter Password:");

            if (LocalPassword != "eddfeddm"){
                WebsiteUnlocked = false;
                alert("False Password")
            }
            else {
                WebsiteUnlocked = true;
            }
            doTheMagic();
        }