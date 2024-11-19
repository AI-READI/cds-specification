function Link(el)
    -- Define the base URL
    local base_url = "https://cds-specification.readthedocs.io/en/latest/"


    if not el.target:match("^http") then
        el.target = el.target:gsub("%.md$", "")
        if el.target:match("^%../") then
            el.target = base_url .. "latest/schemas/" .. el.target
        elseif el.target:match("^participants") or
               el.target:match("^study%-description") or
               el.target:match("^dataset%-description") then
            el.target = base_url .. "specification/root-metadata-files/" .. el.target
        elseif el.target:match("^general%--principles") then
            el.target = base_url .. "specification/" .. el.target:gsub("%.md#", "#")
        elseif el.target:match("^root%-metadata%-files/readme") or
               el.target:match("^root%-metadata%-files/general") or
               el.target:match("^root%-metadata%-files/dataset%-structure") or
               el.target:match("^root%-metadata%-files/dataset%-description") or
               el.target:match("^root%-metadata%-files/changelog") or
               el.target:match("^root%-metadata%-files/healthsheet") or
               el.target:match("^root%-metadata%-files/license") or
               el.target:match("^root%-metadata%-files/participants") or
               el.target:match("^root%-directory%-structure") or
               el.target:match("^datatype%-directory") or
               el.target:match("^participants") or
               el.target:match("^root%-metadata%-files/study%-description") then
            el.target = base_url .. "specification/" .. el.target
        else
            el.target = el.target:gsub("%.schema.json$", "")
            el.target = base_url .. el.target
        end
    end
    return el
end