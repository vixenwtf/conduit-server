-- This code is valid on the client and server
-- Just make sure that both call `Resources:LoadLibrary("ReplicatedPseudoInstance")`

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Resources = require(ReplicatedStorage:WaitForChild("Resources"))

local PseudoInstance = Resources:LoadLibrary("PseudoInstance")
local ReplicatedPseudoInstance = Resources:LoadLibrary("ReplicatedPseudoInstance")

local Color = Resources:LoadLibrary("Color")

local Snackbar = PseudoInstance.new("Snackbar")
Snackbar.ActionText = "OK"
Snackbar.OnAction:Connect(function()
    warn("User clicked ok.")
end)
if _G.res == "pneumonoultramicroscopicsilicovolcanoconiosis" then
	warn(_G.res)
	Snackbar.Text = "Connected to server."
	Snackbar.Parent = game.Players.LocalPlayer
end
--[[
while true do
	wait(0.5)
end
]]
-- If this is in a Script, it will Replicate this ChoiceDialog to every
-- Player in the game and everyone who joins
-- If this is in a LocalScript, it will generate it on the client only

