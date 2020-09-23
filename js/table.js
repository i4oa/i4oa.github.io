function get_csv(pub_path) {
    $.ajax({
        url : pub_path,
        dataType: "text",
        success : function (pub_data) {
            create_table(pub_data);
        }
    });
}

function create_table(pub_data) {
    var table = $("#partpublishers");

    var json_data = $.csv.toObjects(pub_data);

    var i = 0;
    var new_row = true;
    json_data.forEach(function(entry) {
        if (i == 0 && new_row) {
            table.append("<tr></tr>");
            new_row = false;
        }

        var pub_name = entry["Member Name & ID"];
        $("#partpublishers tr:last-child").append("<td>" + pub_name + "</td>");
        i = (i + 1) % 2;
        new_row = true;
    });
}

var data_dir = "data/";
var pub_file = data_dir + "publ.txt";

var table = $("#partpublishers");
get_csv(pub_file);