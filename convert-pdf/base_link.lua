function Link(el)
    -- Define the base URL
    local base_url = "https://cds-specification.readthedocs.io/en/latest/"

    el.target = el.target:gsub("%.md$", "")

    if not el.target:match("^http") then
        if el.target:match("^%../") then
            el.target = base_url .. "latest/schemas/" ..el.target
        else
            el.target = el.target:gsub("%.schema.json$", "")
            el.target = base_url .. "specification/" .. el.target
        end
    end
    return el
end